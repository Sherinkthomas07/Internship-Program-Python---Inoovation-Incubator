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
