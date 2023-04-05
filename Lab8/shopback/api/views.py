from django.shortcuts import Http404, get_object_or_404
from django.http.response import JsonResponse
from api.models import Product, Category


def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def category_detail(request, category_id):
    try:
        category = Category.objects.get(pk=category_id)
    except Category.DoesNotExit as e:
        return JsonResponse({'error': str(e)}, status=404)
    return JsonResponse(category.to_json(), status=200)


def product_list_by_category(request, category_id):
    category = get_object_or_404(Category, id=category_id)
    products = Product.objects.filter(category=category)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_list(request):
    # # select * from api_product;
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, product_id):
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExit as e:
        return JsonResponse({'error': str(e)}, status=404)
    return JsonResponse(product.to_json(), status=200)
