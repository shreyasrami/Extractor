# Generated by Django 3.2.4 on 2021-06-12 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('input_cv', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='contact',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='document',
            name='email',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]