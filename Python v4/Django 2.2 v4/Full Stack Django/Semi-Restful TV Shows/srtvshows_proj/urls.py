from django.urls import path, include

urlpatterns = [
    path('', include('sr_app.urls')),
]