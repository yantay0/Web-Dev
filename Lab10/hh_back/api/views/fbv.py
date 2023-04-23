from api.models import Vacancy, Company
from django.shortcuts import Http404, get_object_or_404
from django.http.response import JsonResponse, HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from api.serializers import CompanySerializer1, CompanySerializer2, VacancySerializer1
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from api.serializers.vacancy_serializer import VacancySerializer2


@api_view(http_method_names=['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer1(companies, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = CompanySerializer1(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(http_method_names=['GET', 'PUT', 'DELETE'])
def company_detail(request, company_id):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = CompanySerializer1(company)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CompanySerializer1(instance=company, data=request.body)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        company.delete()
        return Response({'deleted': True})


@api_view(http_method_names=['GET'])
def vacancy_list_by_category(request, company_id):
    company = get_object_or_404(Company, id=company_id)
    vacancies = Vacancy.objects.filter(company=company)
    serializer = VacancySerializer2(vacancies, many=True)
    return Response(serializer.data)

@api_view(http_method_names=['GET', 'POST'])
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = VacancySerializer2(data=request.data)
        print(request.data)
        if serializer.is_valid():
            company_id = request.data.get('company')
            try:
                company = Company.objects.get(id=company_id)
            except Company.DoesNotExist:
                return Response(
                    {'error': 'Company with ID {} does not exist'.format(company_id)},
                    status=status.HTTP_400_BAD_REQUEST
                )
            serializer.save(company=company)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(http_method_names=['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(pk=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        serializer = VacancySerializer2(vacancy)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = VacancySerializer2(instance=vacancy, data=request.body)
        print(request.body)
        print(vacancy)
        # print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        vacancy.delete()
        return Response({'deleted': True})
