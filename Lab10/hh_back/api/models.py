from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=255, null=True)
    description = models.TextField(default=None, null=True)
    city = models.CharField(max_length=255, null=True, default=None)
    address = models.TextField(null=True, default=None)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.CharField(max_length=255)
    company = models.ForeignKey(Company,
                                on_delete=models.CASCADE, related_name='vacancies')

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self):
        return f'{self.id}: {self.name}: {self.salary}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.to_json()
        }
