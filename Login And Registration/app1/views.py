import random
from django.shortcuts import render

# Create your views here.
from app1.models import Login_table, Registration


def home(request):
    return render(request, 'home.html')


def login(request):
    if request.method == 'POST':
        uname = request.POST.get("uname_input")
        pswd = request.POST.get("password")
        if Login_table.objects.filter(username=uname, password=pswd):
            return render(request, "userhome.html")
        else:
            return render(request, 'login.html')
    else:
        return render(request, 'login.html')


def register(request):
    if request.method == 'POST':
        first_name = request.POST.get("fname")
        last_name = request.POST.get("lname")
        state = request.POST.get("state")
        city = request.POST.get("city")
        zip_code = request.POST.get("zip")
        email = request.POST.get("mail")
        mobile = request.POST.get("mobile")
        user_name = request.POST.get("username")
        password = request.POST.get("pass")

        login_object = Login_table()
        login_object.username = user_name
        login_object.password = password
        login_object.save()

        reg_object = Registration()
        reg_object.login_id = login_object
        reg_object.firstname = first_name
        reg_object.lastname = last_name
        reg_object.state = state
        reg_object.city = city
        reg_object.zip = zip_code
        reg_object.email = email
        reg_object.mobile = mobile
        reg_object.save()
        return render(request, "login.html")
    return render(request, 'registration.html')
