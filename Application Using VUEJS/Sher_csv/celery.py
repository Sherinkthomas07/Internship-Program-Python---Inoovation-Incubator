import os

from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Sher_csv.settings')

Sher_app = Celery('Sher_csv')

Sher_app.config_from_object('django.conf:settings', namespace='CELERY')

Sher_app.autodiscover_tasks()
