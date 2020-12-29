from django.shortcuts import render, redirect

from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from wall_app.models import users

import bcrypt

def index(request):
    return render(request, 'index.html')

def register(request):
    errors = users.objects.user_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        password=request.POST['r_password']
        pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        users.objects.create(
            first_name=request.POST['r_first_name'],
            last_name=request.POST['r_last_name'],
            email=request.POST['r_email'],
            password=pw_hash,
            )
        request.session['user']={'user':request.POST['r_first_name']}
        return redirect('/welcome')

def login(request):
    errors = users.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        # user=users.objects.get(email=request.POST['login_email'])
        request.session['info']=request.POST['login_email']
        return redirect('/welcome')

def welcome(request):
    info=users.objects.get(email=request.session['info'])
    msg=messages.objects.filter(user=info.id)
    context={
        'first_name':info.first_name,
        'last_name':info.last_name,
        'email':info.email
    }
    return render(request, 'welcome.html', context)

def log_out(request):
    request.session.clear()
    return redirect('/')
