from django.db import models


class Login_table(models.Model):


    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)


class Registration(models.Model):
    login_id = models.ForeignKey(Login_table, on_delete=models.CASCADE)
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    zip = models.CharField(max_length=20)
    email = models.EmailField()
    mobile = models.BigIntegerField()



