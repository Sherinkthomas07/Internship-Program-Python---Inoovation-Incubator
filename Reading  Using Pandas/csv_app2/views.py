from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from csv_app2.serializers import csv_serializer
from csv_app2.tasks import csv_dataset


@csrf_exempt
def csvApi(request, id=0):
    if request.method == 'GET':
        csv = csv_dataset.object.all()
        CSV_Serializer = csv_serializer(csv, many=True)
        return JsonResponse(CSV_Serializer.data, safe=False)
