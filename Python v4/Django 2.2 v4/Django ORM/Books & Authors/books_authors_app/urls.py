from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('process_book', views.process_book),
    path('book_details', views.book_details),
    path('books', views.books),
    path('addAuthor', views.add_author),
    path('authors', views.authors),
    path('process_author', views.process_author),
    path('author_details', views.author_details),
    path('author', views.author),
    path('addBook', views.add_book),
]