from django import forms
from api.models import Company, Vacancy
from rest_framework import serializers


class CompanySerializer1(serializers.Serializer):
    id = serializers.ReadOnlyField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField(default='', required=False)
    city = serializers.CharField(max_length=50, required=False)
    address = serializers.CharField(max_length=255, required=False)


    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance

    class Meta:
        model = Company
        # fields = '__all__'


class CompanySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
