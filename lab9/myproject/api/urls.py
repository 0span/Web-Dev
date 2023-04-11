from django.urls import path, re_path
from api import views


urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:company_id>', views.company_details),
    path('companies/<int:company_id>/vacancies', views.vacancies_by_company),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:vacancy_id>', views.vacancy_details),
    path('vacancies/top_ten', views.top_ten),

]
