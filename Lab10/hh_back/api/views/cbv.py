from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from api.models import Company, Vacancy
from api.serializers import CompanySerializer2, CompanySerializer1
from api.serializers.vacancy_serializer import VacancySerializer2


class CompanyList(APIView):

    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer1(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        print(request.data)
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CompanyDetail(APIView):
    # def get_object(self, company_id):
    #     try:
    #         return Company.objects.get(pk=company_id)
    #     except Company.DoesNotExist as e:
    #         return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, company_id):
        try:
            company = Company.objects.get(pk=company_id)
        except Company.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        instance = company
        serializer = CompanySerializer1(instance)
        return Response(serializer.data)

    def put(self, request, company_id):
        try:
            company = Company.objects.get(pk=company_id)
        except Company.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        instance = company
        serializer = CompanySerializer1(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, company_id):
        try:
            company = Company.objects.get(pk=company_id)
        except Company.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        instance = company
        instance.delete()
        return Response({'deleted': True})


class VacancyList(APIView):

    def get(self, request):
        companies = Vacancy.objects.all()
        serializer = CompanySerializer1(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyDetail(APIView):
    # def get_object(self, company_id):
    #     try:
    #         return Company.objects.get(pk=company_id)
    #     except Company.DoesNotExist as e:
    #         return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, vacancy_id):
        try:
            vacancy = Company.objects.get(pk=vacancy_id_id)
        except Company.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        instance = vacancy
        serializer = CompanySerializer1(instance)
        return Response(serializer.data)

    def put(self, request, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(pk=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        instance = vacancy
        serializer = VacancySerializer2(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(pk=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        instance = vacancy
        instance.delete()
        return Response({'deleted': True})

    class VacancyByCompany(APIView):
        def get(self, request, company_id):
            try:
                company = Company.objects.get(pk=company_id)
                vacancies = Vacancy.objects.filter(company=company)
                serializer = VacancySerializer2(vacancies, many=True)
                return Response(serializer.data)
            except Company.DoesNotExist:
                return Response("Company not found", status=status.HTTP_404_NOT_FOUND)

