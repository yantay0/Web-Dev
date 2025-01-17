# Generated by Django 4.2 on 2023-04-19 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_vacancy_company'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='address',
            field=models.TextField(default=None),
        ),
        migrations.AlterField(
            model_name='company',
            name='city',
            field=models.CharField(default=None, max_length=255),
        ),
        migrations.AlterField(
            model_name='company',
            name='description',
            field=models.TextField(default=None),
        ),
    ]
