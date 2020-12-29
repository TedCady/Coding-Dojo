from django.shortcuts import render, redirect
from .models import Users

def index(request):
    context = {
        'user_info': Users.objects.all()
    }
    return render(request, 'index.html', context)
def process_user(request):
    new_user = Users.objects.create(first_name=request.POST['firstName'], last_name=request.POST['lastName'], email_address=request.POST['uEmail'], age=request.POST['iAge'])
    new_user.save()
    return redirect('/')