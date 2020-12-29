from django.urls import path
from . import views

urlpatterns = [
    path('', views.re),
    path('shows', views.shows),
    path('shows/create', views.show_create),
    path('shows/new', views.new),
    path('shows/<int:id>', views.show_page),
    path('shows/<int:id>/edit', views.edit),
    path('shows/<int:id>/update', views.update),
    path('shows/<int:id>/destroy', views.destroy),
]