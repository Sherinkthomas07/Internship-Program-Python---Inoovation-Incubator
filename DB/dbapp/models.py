from django.db import models


class text_db(models.Model):
    size = models.CharField(max_length=50)
    data = models.CharField(max_length=500)
    m_date = models.CharField(max_length=20)
    c_date = models.CharField(max_length=20)