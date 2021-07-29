from django.conf.urls import url

from csvapp import views

urlpatterns = [
    url(r'^csv$', views.csvApi),
]
