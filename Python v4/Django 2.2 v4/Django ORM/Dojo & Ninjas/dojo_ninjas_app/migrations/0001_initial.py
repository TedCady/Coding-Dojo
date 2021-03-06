# Generated by Django 3.1.3 on 2020-11-13 16:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dojo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=255)),
                ('city', models.TextField(max_length=255)),
                ('state', models.TextField(max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='Ninjas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.TextField(max_length=255)),
                ('last_name', models.TextField(max_length=255)),
                ('dojo_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dojo_id', to='dojo_ninjas_app.dojo')),
            ],
        ),
    ]
