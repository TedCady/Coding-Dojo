from django.shortcuts import render, HttpResponse, redirect
from sr_app.models import Show
from django.contrib import messages

def re(request):
    return redirect('/shows')

def shows(request):
    context={'shows':Show.objects.all()}
    return render(request, 'shows.html', context)

def show_page(request, id):
    context = {
        'show':Show.objects.get(id=id)
    }
    return render(request, 'show_details.html', context)

def new(request):
    return render(request, 'new.html')

def show_create(request):
    errors = Show.objects.info_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f'/shows/new')
    else:
        Show.objects.create(
            title=request.POST['title'],
            network=request.POST['network'],
            release_date=request.POST['release_date'],
            description=request.POST['description'],
        )
    created=Show.objects.last()
    id=created.id
    return redirect(f'/shows/{id}')

def edit(request, id):
    context = {'show':Show.objects.get(id=id)}
    return render(request, 'edit.html', context)

def update(request, id):
    errors = Show.objects.info_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f'/shows/{id}/edit')
    else:        
        show = Show.objects.get(id = id)
        if len(request.POST['title']) > 0:
            show.title = request.POST['title']
        if len(request.POST['description']) > 0:
            show.desc = request.POST['description']
        if len(request.POST['release_date']) > 0:
            show.release_date = request.POST['release_date']
        if len(request.POST['description']) > 0:
            show.description = request.POST['description']
        show.save()
    return redirect(f'/shows/{id}')

def destroy(request, id):
    dStroy=Show.objects.get(id=id)
    dStroy.delete()
    return redirect('/shows')

