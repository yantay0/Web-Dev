from django.contrib import admin
from django.urls import path
from api import views
urlpatterns = [
    # path('companies/', views.company_list),
    path('companies/', views.CompanyList.as_view()),
    # path('companies/<int:company_id>/', views.company_detail),
    path('companies/<int:company_id>/', views.CompanyDetail.as_view()),
    path('companies/<int:company_id>/vacancies/', views.vacancy_list_by_category),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:vacancy_id>', views.VacancyDetail.as_view()),
]
