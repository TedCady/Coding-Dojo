from django.db import models
import re
import bcrypt

class UserManager(models.Manager):
    def user_validator(self, context):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(context['r_first_name']) < 2:
            errors['r_first_name'] = 'First Name must be at least 2 characters'
        if len(context['r_last_name']) < 2:
            errors['r_last_name'] = 'Last Name must be at least 2 characters'
        if not EMAIL_REGEX.match(context['r_email']):
            errors['r_email'] = "Email address is invalid"
        if len(context['r_password']) < 8:
            errors['r_password'] = 'Last Name must be at least 2 characters' 
        if context['r_password'] != context['r_confirm_password']:
            errors['r_confirm_password'] = 'Passwords do not match' 
        return errors

    def login_validator(self, context):
        errors = {}
        if context['login_email'] == '' or context['login_password'] == '':
            errors['login_blank'] = 'You must enter your email and password'
            return errors
        if len(users.objects.filter(email=context['login_email'])) < 1:
            errors['no_user_found'] = 'No account with that email exists'
            return errors
        else:
            user=User.objects.get(email=context['login_email'])
            if bcrypt.checkpw(context['login_password'].encode(), user.password.encode()):
                return errors
            else:
                errors['pw_incorrect'] = 'Password incorrect'
        return errors