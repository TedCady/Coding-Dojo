# Generated by Django 3.1.3 on 2020-11-17 14:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lr_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='confirm_password',
        ),
    ]
