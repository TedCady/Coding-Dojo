from django.db import models

class Dojo(models.Model):
    name = models.TextField(max_length=255)
    city = models.TextField(max_length=255)
    state = models.TextField(max_length=2)
    desc = models.DateField(auto_now=True)
class Ninjas(models.Model):
    dojo_id = models.ForeignKey(Dojo, related_name='dojo_id', on_delete=models.CASCADE)
    first_name = models.TextField(max_length=255)
    last_name = models.TextField(max_length=255)