import os

from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'DB_CSV.settings')

csvapp = Celery('DB_CSV')

csvapp.config_from_object('django.conf:settings', namespace='CELERY')

csvapp.autodiscover_tasks()
