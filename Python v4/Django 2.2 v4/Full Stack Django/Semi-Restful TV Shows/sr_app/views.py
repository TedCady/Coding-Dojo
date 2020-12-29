from django.shortcuts import render
from sr_app.models import Show

def shows(request):
    context={'shows':Show.objects.all()}
    return render(request, 'shows.html', context)
