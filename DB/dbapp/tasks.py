from __future__ import absolute_import, unicode_literals
from .models import text_db
import glob
import os


from celery import shared_task
files = list()


@shared_task
def fun():
    k = 0
    path = r'C:\Users\91907\OneDrive\Desktop\Python program\Text Files'

    for filename in glob.glob(os.path.join(path, '*.txt')):
        if filename not in files:
            files.append(filename)
            with open(filename, 'r') as fi:
                txt = fi.readline()
                k = k + 1

                size = os.path.getsize(filename)
                modified_date = os.path.getmtime(filename)
                create_date = os.path.getctime(filename)

                obj = text_db(size=size, data=txt, m_date=modified_date, c_date=create_date)
                obj.save()
                fi.close()

