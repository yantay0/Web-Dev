# Generated by Django 4.2 on 2023-04-11 10:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('salary', models.CharField(max_length=255)),
                ('company', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='vacancies', to='api.company')),
            ],
        ),
    ]