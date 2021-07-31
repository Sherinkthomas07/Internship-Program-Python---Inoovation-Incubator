import this
import ui

from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from csvapp.serializers import csv_serializer
from csvapp.models import CSV_Record


@csrf_exempt
def csvApi(request, id=0):
    if request.method == 'GET':
        csv = CSV_Record.objects.all()
        CSV_Serializer = csv_serializer(csv, many=True)
        return JsonResponse(CSV_Serializer.data, safe=False)


@csrf_exempt
def update(request):
    if request.method == 'POST':
        name_prefix = request.POST.get("prefix")
        first_name = request.POST.get("fname")
        middle_name = request.POST.get("mname")
        last_name = request.POST.get("lname")
        email = request.POST.get("mail")
        gender = request.POST.get("gender")
        father_name = request.POST.get("fathername")
        mother_name = request.POST.get("mothername")

        update_m = CSV_Record()
        update_m.Name_Prefix = name_prefix
        update_m.First_Name = first_name
        update_m.Middle_Initial = middle_name
        update_m.Last_Name = last_name
        update_m.Gender = gender
        update_m.Email = email
        update_m.Father_Name = father_name
        update_m.Mother_Name = mother_name
        update_m.save()

        return render(request, 'index.html')
