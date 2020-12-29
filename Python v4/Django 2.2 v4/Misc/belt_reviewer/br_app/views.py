from django.shortcuts import render, redirect
from .models import Users, Authors, Books, Reviews
from django.contrib import messages
import bcrypt
from titlecase import titlecase

def index(request):
    if 'name' in request.session:
        return redirect('/dashboard')
    else:
        return render(request, 'index.html')

def register(request):
    errors=Users.objects.Validate_Registration(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        hash_pw=bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
        Users.objects.create(
            name = titlecase(request.POST['name']),
            alias = request.POST['alias'],
            email = request.POST['email'],
            password = hash_pw
        )
        request.session['name']=Users.objects.last().name
        request.session['email']=Users.objects.last().email
        return redirect('/dashboard')

def login(request):
    errors=Users.objects.Validate_Login(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        request.session['name']=Users.objects.get(email=request.POST['email']).name
        request.session['email']=request.POST['email']
        return redirect('/dashboard')

def dashboard(request):
    id=Reviews.objects.last().id
    review_1=Reviews.objects.get(id=id)
    review_2=Reviews.objects.get(id=id-1)
    review_3=Reviews.objects.get(id=id-2)
    reviews={
        'r1':review_1,
        'r2':review_2,
        'r3':review_3,
    }
    all_reviews=Reviews.objects.all()
    context = {
        'name':request.session['name'],
        'email':request.session['email'],
        'reviews':reviews,
        'all_reviews':all_reviews,
    }
    return render(request, 'dashboard.html', context)

def logout(request):
    request.session.clear()
    return redirect('/')

def add(request):
    context={
        'authors':Authors.objects.all(),
    }
    return render(request, 'add.html', context)

def add_review(request):
    user=Users.objects.get(email=request.session['email'])
# Assign variables from request.POST/Get or Create Author
    title=request.POST['title']
    post_review=request.POST['review']
    rating=request.POST['rating']
    if request.POST['add_author']:
        if Authors.objects.filter(name=request.POST['add_author']):
            author=Authors.objects.get(name=request.POST['add_author'])
        else:
            Authors.objects.create(name=request.POST['add_author'])
            author=Authors.objects.last()
    else:
        author=Authors.objects.get(name=request.POST['author'])
# Get or Create book
    if Books.objects.filter(title=title, author=author):
        book=Books.objects.get(title=title, author=author)
    else:
        Books.objects.create(title=title, author=author)
        book=Books.objects.last()
# Create Review
    Reviews.objects.create(review=post_review, rating=rating, user=user, book=book)
    review=Reviews.objects.last()
    return redirect(f'/books/{book.id}')

def book(request, id):
    book=Books.objects.get(id=id)
    reviews=Reviews.objects.all().filter(book=book)
    context={
        'book':book,
        'reviews':reviews,
        'active_user':request.session['email']
    }
    return render(request, 'book.html', context)

def delete(request, book_id, review_id):
    review=Reviews.objects.get(id=review_id)
    user=review.user.email
    if user != request.session['email']:
        return redirect(f'/books/{book_id}')
    else:
        review.delete()
    return redirect(f'/books/{book_id}')

def user(request, user_id):
    user=Users.objects.get(id=user_id)
    reviews=Reviews.objects.all().filter(user=user)
    context={
        'user':user,
        'reviews':reviews,
    }
    return render(request, 'user.html', context)
