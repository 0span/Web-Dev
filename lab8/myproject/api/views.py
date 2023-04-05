from django.http.response import JsonResponse
from api.models import Product, Category


def product_list(request):
    # select * from auth_product;
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_details(request, id):
    products = Product.objects.all()
    for p in products:
        if p.id == id:
            return JsonResponse(p.to_json())

    return JsonResponse({'error': 'Product not found'})


def categories_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def category_id(request, id):
    categories = Category.objects.all()
    for c in categories:
        if c.id == id:
            return JsonResponse(c.to_json())
    return JsonResponse({'error': 'Product not found'})


def category_products(request, category):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products if p.category == category]
    return JsonResponse(products_json,safe = False)