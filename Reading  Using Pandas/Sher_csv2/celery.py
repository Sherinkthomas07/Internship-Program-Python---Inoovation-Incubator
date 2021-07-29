import os

from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Sher_csv2.settings')

csv_app2 = Celery('Sher_csv2')

csv_app2.config_from_object('django.conf:settings', namespace='CELERY')

csv_app2.autodiscover_tasks()
