from django.shortcuts import redirect, render
from .models import Document
# Create your views here.

from io import BytesIO
from django.core.files import File
import os
import re
from docx2pdf import convert
from django.core.files.uploadedfile import InMemoryUploadedFile
from io import BytesIO
from win32com import client as wc
import pythoncom
import PyPDF2  

    

def index(request):
    all_cvs = Document.objects.all()      

    if request.method == "GET":
        return render(request,'index.html',{'all_cvs':all_cvs})
    else:
        files = request.FILES.getlist('cvs')
        pythoncom.CoInitialize()
        w = wc.Dispatch('Word.Application')
        
        for file in files:
            obj = Document.objects.create(cv=file)  
            split_tup = os.path.splitext(obj.cv.name) 
            file_name = split_tup[0] 
            file_extension = split_tup[1] 

            if file_extension != ".pdf":
                if file_extension == ".docx":
                    convert(obj.cv.path)
                else:
                    doc=w.Documents.Open(obj.cv.path)
                    doc.SaveAs("C:\\Users\\shreyas\\Desktop\\OST\\OST\\media\\" + file_name + ".docx",16)
                    convert("C:\\Users\\shreyas\\Desktop\\OST\\OST\\media\\" + file_name + ".docx")

                f = open("C:\\Users\\shreyas\\Desktop\\OST\\OST\\media\\" + file_name + '.pdf','rb').read()
                fle_io = BytesIO(f)
                fle_nme = file_name.split('/')[1]
                obj.cv = File(fle_io,"final_uploaded/"+fle_nme+".pdf")
                obj.save()

            pdfFileObj = open(obj.cv.path, 'rb')  
            pdfReader = PyPDF2.PdfFileReader(pdfFileObj)  
            pageObj = pdfReader.getPage(0)  
            txt = pageObj.extractText()
            pdfFileObj.close()

            mail = re.search(r'[\w\.-]+@[\w\.-]+',txt)
            phone = re.search(r'(\+91|0)?[7-9]\d{9}',txt)

            if mail != None:
                mail = mail.group(0)
            if phone != None:
                phone = phone.group(0)
    
            obj.email = mail
            obj.contact = phone
            obj.save()

        return render(request,'index.html',{'all_cvs':all_cvs})
