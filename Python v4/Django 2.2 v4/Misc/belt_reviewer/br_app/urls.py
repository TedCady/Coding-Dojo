from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('dashboard', views.dashboard),
    path('login', views.login),
    path('logout', views.logout),
    path('add', views.add),
    path('add_review', views.add_review),
    path('books/<int:id>', views.book),
    path('delete/<int:book_id>/<int:review_id>', views.delete),
    path('users/<int:user_id>', views.user),
    
]