# Generated by Django 4.2 on 2023-05-01 02:35

from django.db import migrations
import django_enum.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='user',
            field=django_enum.fields.EnumPositiveSmallIntegerField(choices=[(0, 'Employee'), (1, 'Employer'), (2, 'Manager')], default=2),
        ),
    ]
