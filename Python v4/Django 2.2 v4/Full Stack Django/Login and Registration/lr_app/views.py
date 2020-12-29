from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from lr_app.models import User

import bcrypt

def index(request):
    return render(request, 'index.html')

def register(request):
    errors = User.objects.user_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        password=request.POST['r_password']
        pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        User.objects.create(
            first_name=request.POST['r_first_name'],
            last_name=request.POST['r_last_name'],
            email=request.POST['r_email'],
            password=pw_hash,
            )
        request.session['user']={'user':request.POST['r_first_name']}
        return redirect('/welcome')

def login(request):
    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        user=User.objects.get(email=request.POST['login_email'])
        request.session['user']={'user':user.first_name}
        return redirect('/welcome')

def welcome(request):
    user=request.session['user']
    return render(request, 'welcome.html', user)

def log_out(request):
    request.session.clear()
    return redirect('/')