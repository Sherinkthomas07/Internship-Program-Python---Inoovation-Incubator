from __future__ import absolute_import, unicode_literals
from .models import CSV_Record
import csv
from celery import shared_task


@shared_task
def csvfun():
    with open('1000_rec.csv') as f:
        reader = csv.reader(f)
        next(reader)

        for row in reader:
            h = hash(tuple(row))
            if CSV_Record.objects.filter(Hash=h).exists():
                print("Same")
            else:
                obj = CSV_Record(Hash=h, Emp_ID=row[0], Name_Prefix=row[1], First_Name=row[2], Middle_Initial=row[3], Last_Name=row[4], Gender=row[5], Email=row[6], Father_Name=row[7], Mother_Name=row[8])
                obj.save()
    f.close()
