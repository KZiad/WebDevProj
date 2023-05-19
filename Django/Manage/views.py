from django.shortcuts import render

empData = [
        {
                'name': 'Mohamed Waleed',
                'id': '20210363',
                'email': 'mohamed2003elashmawy@gmail.com',
                'address': '6 Abu Baker',
                'num': '01064207150',
                'gender': 'Male',
                'status': 'Single',
                'fVacation': '30',
                'aVacation': '9',
                'salary': '20000',
                'dob': '23-3-2003'
        }
]

def home(request):
        return render(request, 'Manage/index.html')

def about(request):
        return render(request, 'Manage/aboutUs.html')

def data(request):
        context = {
                'empData': empData
        }
        return render(request, 'Manage/employeeData.html', context)