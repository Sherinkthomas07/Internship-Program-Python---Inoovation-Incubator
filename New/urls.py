from django.conf.urls import url
from django.urls import path

from csvapp import views

urlpatterns = [
    url(r'^csv$', views.csvApi),
    url(r'^', views.update, name='index'),
]
