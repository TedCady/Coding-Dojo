from django.shortcuts import render, redirect
from dojo_ninjas_app.models import Dojo, Ninjas

def index(request):
    context = {"dojos": Dojo.objects.all()}
    return render(request, 'index.html', context)
def process(request):
    if request.POST['in_form'] == 'dojos':
        Dojo.objects.create(
            name=request.POST['dojoName'], 
            city=request.POST['dojoCity'],
            state=request.POST['dojoState'],
            )
    else:
        getID = Dojo.objects.get(name=request.POST['dName'])
        Ninjas.objects.create(
            dojo_id=getID,
            first_name=request.POST['fName'],
            last_name=request.POST['lName'],
        )
    return redirect('/')