from django.urls import path, re_path
from api import views


urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:id>/', views.product_details),
    path('categories/', views.categories_list),
    path('categories/<int:id>/', views.category_id),
    path('categories/<str:category>/products', views.category_products),

]
