from django.shortcuts import render, redirect

def index(request):
    return render(request, 'index.html')

def create_user(request):
    # u_name = request.POST['name']
    # u_email = request.POST['email']
    # context = {
    #     'uName' : u_name,
    #     'uEmail' : u_email
    # }
    return redirect('/result')

def result(request):
    u_name = request.GET['name']
    u_email = request.GET['email']
    context = {
        'uName' : u_name,
        'uEmail' : u_email
    }
    return render(request, 'result.html', context)