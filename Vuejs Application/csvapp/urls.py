from django.conf.urls import url
from csvapp import views

urlpatterns = [
    url(r'^csv$', views.csvApi),
    url(r'^csv/([0-9]+)$',views.csvApi),
]
