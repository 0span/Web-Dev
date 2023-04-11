from django.http.response import JsonResponse
from api.models import Company, Vacancy


def company_list(request):
    companies = Company.objects.all()
    return JsonResponse([c.to_JSON() for c in companies], safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    return JsonResponse([c.to_JSON() for c in vacancies], safe=False)

def vacancy_details(request, vacancy_id):
    try:
        return JsonResponse(Vacancy.object.get(id = vacancy_id).to_JSON())
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status = 400)


def company_details(request, company_id):
    try:
        return JsonResponse(Company.objects.get(id=company_id).to_JSON())
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)



def vacancies_by_company(request, company_id):
    try:
        vacancies = Vacancy.objects.filter(company = company_id)
        return JsonResponse([v.to_JSON() for v in vacancies], safe=False)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

def top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')
    return JsonResponse([v.to_JSON() for v in vacancies], safe=False)
