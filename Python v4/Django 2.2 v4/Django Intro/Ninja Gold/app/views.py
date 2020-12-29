from django.shortcuts import render, redirect
import random

def index(request):
    if 'gold' in request.session:
        pass
    else:
        request.session['gold'] = 0
    return render(request, 'index.html')

def process(request):
    if request.POST['forms'] == 'farm':
        generated_gold = random.randint(10,20)
        total_gold = request.session['gold'] + generated_gold
    elif request.POST['forms'] == 'cave':
        generated_gold = random.randint(5,10)
        total_gold = request.session['gold'] + generated_gold
    elif request.POST['forms'] == 'house':
        generated_gold = random.randint(2,5)
        total_gold = request.session['gold'] + generated_gold 
    elif request.POST['forms'] == 'casino':
        generated_gold = random.randint(-50,50)
        total_gold = request.session['gold'] + generated_gold
    request.session['gold'] = total_gold
    request.session['result'] = f'Gold earned:  {generated_gold}\nTotal balance:  {total_gold}'
    return render(request, 'index.html')
