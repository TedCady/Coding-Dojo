from django.shortcuts import render, redirect
from books_authors_app.models import Book, Author

def index(request):
    context={'books': Book.objects.all()}
    return render(request, 'index.html', context)

def process_book(request):
    title=request.POST['book_name']
    desc=request.POST['book_desc']
    Book.objects.create(title=title, desc=desc)
    return redirect('/')

def book_details(request):
    request.session['book_id']=request.POST['postBook']
    return redirect('/books')

def books(request):
    bID=request.session['book_id']
    context={
        'book':Book.objects.get(id=bID),
        'authors':Author.objects.filter(books=bID),
        'addAuthors':Author.objects.exclude(books=bID)
    }
    return render(request, 'view.html', context)

def add_author(request):
    bID=request.session['book_id']
    if request.POST['authors'] == 'null':
        return redirect('/books')
    else:
        authID=request.POST['authors']
    book=Book.objects.get(id=bID)
    author=Author.objects.get(id=authID)
    author.books.add(book)
    author.save()
    return redirect('/books')

def authors(request):
    context={'authors':Author.objects.all()}
    return render(request, 'authors.html', context)

def process_author(request):
    first=request.POST['fName']
    last=request.POST['lName']
    notes=request.POST['notes']
    Author.objects.create(first_name=first, last_name=last, notes=notes)
    return redirect('/authors')

def author_details(request):
    request.session['author_details']=request.POST['postAuth']
    return redirect('/author')

def author(request):
    ID=request.session['author_details']
    context={
        'author':Author.objects.get(id=ID),
        'books':Book.objects.filter(authors=ID),
        'addBooks':Book.objects.exclude(authors=ID)
    }
    return render(request, 'view_author.html', context)

def add_book(request):
    aID=request.session['authorDetails']
    if request.POST['books'] == 'null':
        return redirect('/author')
    else:
        bookID=request.POST['books']
    author=Author.objects.get(id=aID)
    book=Book.objects.get(id=bookID)
    book.authors.add(author)
    book.save()
    return redirect('/author')




