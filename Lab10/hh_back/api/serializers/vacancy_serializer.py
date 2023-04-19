from rest_framework import serializers
from api.models import Vacancy, Company


class CustomPrimaryKeyRelatedField(serializers.PrimaryKeyRelatedField):
    def to_representation(self, value):
        return value.id


class VacancySerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    salary = serializers.CharField(max_length=255)
    company = serializers.IntegerField()

    def create(self, validated_data):
        vacancy = Vacancy.objects.create(
            name=validated_data['name'],
            description=validated_data['description'],
            salary=validated_data['salary'],
            company=validated_data['company']
        )
        return vacancy

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name),
        instance.description = validated_data.get('description', instance.description),
        instance.salary = validated_data.get('salary', instance.salary),
        instance.company = validated_data.get('company', instance.company)
        instance.save()
        return instance


class VacancySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'
        read_only_fields = ['id', 'company']
