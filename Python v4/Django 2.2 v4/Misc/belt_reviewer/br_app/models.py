from django.db import models
import re
import bcrypt

class Validation_Manager(models.Manager):
    def Validate_Registration(self, info):
        errors = {}
        email_val = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(info['name']) < 3:
            errors['name'] = 'Name must be at least 3 characters long'
        if not email_val.match(info['email']):
            errors['email'] = 'Invalid email address'
        if Users.objects.filter(email=info['email']):
            errors['email'] = 'Email already exists'
        if len(info['password']) < 8:
            errors['password'] = 'Password must be at least 8 characters long'
        if info['password'] != info['confirm']:
            errors['confirm'] = 'Passwords do not match'
        return errors
    def Validate_Login(self, info):
        errors = {}
        if not Users.objects.filter(email=info['email']):
            errors['email'] = 'Email not found'
            return errors
        user=Users.objects.get(email=info['email'])
        if bcrypt.checkpw(info['password'].encode(), user.password.encode()):
            return errors
        else:
            errors['password'] = 'Invalid password'
            return errors

class Users(models.Model):
    name=models.TextField(max_length=255)
    alias=models.TextField(max_length=255)
    email=models.TextField(max_length=255)
    password=models.TextField(max_length=255)
    created_on=models.DateField(auto_now_add=True)
    updated_on=models.DateField(auto_now=True)
    objects=Validation_Manager()
    class Meta:
        db_table='users'

class Authors(models.Model):
    name=models.TextField(max_length=255)
    created_on=models.DateField(auto_now_add=True)
    updated_on=models.DateField(auto_now=True)
    class Meta:
        db_table='authors'

class Books(models.Model):
    title=models.TextField(max_length=255)
    author=models.ForeignKey(Authors, related_name='book', blank=True, null=True, on_delete=models.CASCADE)
    created_on=models.DateField(auto_now_add=True)
    updated_on=models.DateField(auto_now=True)
    class Meta:
        db_table='books'
        
class Reviews(models.Model):
    review=models.TextField(max_length=255)
    rating=models.IntegerField()
    user=models.ForeignKey(Users, related_name='users', blank=True, null=True, on_delete=models.CASCADE)
    book=models.ForeignKey(Books, related_name='books', blank=True, null=True, on_delete=models.CASCADE)
    created_on=models.DateField(auto_now_add=True)
    updated_on=models.DateField(auto_now=True)
    class Meta:
        db_table='reviews'
