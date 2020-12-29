from django.db import models

class Show(models.Model):
    title=models.TextField(max_length=255)
    network=models.TextField(max_length=255)
    release_date=models.DateField()
    description=models.TextField(max_length=255)
    date_created=models.DateTimeField(auto_now_add=True)
    date_updated=models.DateTimeField(auto_now=True)
