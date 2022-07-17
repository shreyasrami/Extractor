from django.db import models

# Create your models here.


class Document(models.Model):
    cv = models.FileField(upload_to="cvs")
    email = models.CharField(max_length=100,null=True,blank=True)
    contact = models.CharField(max_length=15,null=True,blank=True)
    