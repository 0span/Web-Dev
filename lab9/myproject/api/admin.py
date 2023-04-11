from django.contrib import admin
from api.models import Company, Vacancy


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'city')

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ( 'name', 'salary')
