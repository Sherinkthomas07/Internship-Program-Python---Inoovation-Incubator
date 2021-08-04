
from rest_framework.parsers import JSONParser

from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt

from csvapp.serializers import csv_serializer
from csvapp.models import CSV_Record


@csrf_exempt
def csvApi(request, id=0):
    if request.method == 'GET':
        csv = CSV_Record.objects.all()
        CSV_Serializer = csv_serializer(csv, many=True)
        return JsonResponse(CSV_Serializer.data, safe=False)
    elif request.method == 'PUT':
        csv_data = JSONParser().parse(request)
        csv = CSV_Record.objects.get(Emp_ID=csv_data['Emp_ID'])
        CSV_Serializer = csv_serializer(csv, data=csv_data)
        if CSV_Serializer.is_valid():
            CSV_Serializer.save()
            return JsonResponse("Updated successfully", safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method == 'DELETE':
        csv = CSV_Record.objects.get(Emp_ID=id)
        csv.delete()
        return JsonResponse("Deleted Successfully", safe=False)


# @csrf_exempt
# def update(request, id=0):
#     if request.method == 'PUT':
#         csv_data = JSONParser().parse(request)
#         result = CSV_Record.objects.get(Emp_ID=csv_data['Emp_ID'])
#         CSV_Serializer = csv_serializer(result, data=csv_data)
#         if CSV_Serializer.is_valid():
#             CSV_Serializer.save()
#             return JsonResponse("Updated Successfully", safe=False)
#         return JsonResponse("Failed to Update")
#     elif request.method == 'POST':
#         csv_data = JSONParser().parse(request)
#         CSV_Serializer = csv_serializer(data=csv_data)
#         if CSV_Serializer.is_valid():
#             CSV_Serializer.save()
#             return JsonResponse("Added Successfully", safe=False)
#         return JsonResponse("Failed to Add", safe=False)
#     elif request.method == 'DELETE':
#         csv = CSV_Record.objects.get(Emp_ID=id)
#         csv.delete()
#         return JsonResponse("Deleted Successfully", safe=False)
