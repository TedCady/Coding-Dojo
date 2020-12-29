from django.db import models
import datetime

class ShowManager(models.Manager):
    def info_validator(self, postData):
        errors = {}
        if len(postData['title']) < 2:
            errors["title"] = "Title should be at least 2 characters"
        if len(postData['network']) < 3:
            errors["network"] = "Network should be at least 3 characters"
        if len(postData['release_date']) < 1:
            errors["release_date"] = "Release date is required"
        if len(postData['description']) > 0 and len(postData['description']) < 10:
            errors["description"] = "Description should be at least 10 characters"
        return errors

class Show(models.Model):
    title=models.TextField(max_length=255)
    network=models.TextField(max_length=255)
    release_date=models.DateField()
    description=models.TextField(max_length=255)
    date_created=models.DateTimeField(auto_now_add=True)
    date_updated=models.DateTimeField(auto_now=True)
    objects=ShowManager()