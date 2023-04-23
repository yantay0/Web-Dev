from api.models import Vacancy, Company
from django.shortcuts import Http404, get_object_or_404
from django.http.response import JsonResponse, HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from api.serializers import CompanySerializer1, CompanySerializer2
from rest_framework.renderers import JSONRenderer


@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer1(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer1(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
    return JsonResponse(serializer.errors, status = 400)
        # company_name = data.get('name', '')
        # company_description = data.get('description', '')
        # company_city = data.get('city', '')
        # company_address = data.get('address', '')
        # company = Company.objects.create(name=company_name, description=company_description,
        #                                  city=company_city, address=company_address)
        # return JsonResponse(company.to_json())


@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CompanySerializer1(company)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CompanySerializer1(instance=company, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})


def vacancy_list_by_category(request, company_id):
    company = get_object_or_404(Company, id=company_id)
    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(pk=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)


def vacancy_list_top_ten(request):
    vacancies_top_ten = Vacancy.objects.order_by('-salary')[:10]
    vacancies_top_ten_json = [v.to_json() for v in vacancies_top_ten]
    return JsonResponse(vacancies_top_ten_json, safe=False)
