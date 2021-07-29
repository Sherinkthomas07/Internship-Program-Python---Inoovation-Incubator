from rest_framework import serializers

from csvapp.models import CSV_Record


class csv_serializer(serializers.ModelSerializer):
    class Meta:
        model = CSV_Record
        fields = (
            'Emp_ID', 'Name_Prefix', 'First_Name', 'Middle_Initial', 'Last_Name', 'Gender', 'Email', 'Father_Name',
            'Mother_Name')
