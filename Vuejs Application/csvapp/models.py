from django.db import models


class CSV_Record(models.Model):
    Hash = models.CharField(max_length=50)
    Emp_ID = models.CharField(max_length=50)
    Name_Prefix = models.CharField(max_length=50)
    First_Name = models.CharField(max_length=50)
    Middle_Initial = models.CharField(max_length=50)
    Last_Name = models.CharField(max_length=50)
    Gender = models.CharField(max_length=50)
    Email = models.EmailField(max_length=50)
    Father_Name = models.CharField(max_length=50)
    Mother_Name = models.CharField(max_length=50)
    Full_Name = models.CharField(max_length=50)

