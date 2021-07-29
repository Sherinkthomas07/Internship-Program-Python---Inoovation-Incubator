import os

from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'DB.settings')

dbapp = Celery('DB')

dbapp.config_from_object('django.conf:settings', namespace='CELERY')

dbapp.autodiscover_tasks()
