from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    def create(self,validated_data):
        category = Category.objects.create(**validated_data)
        return category

    def update(self,instance,validated_data):
        instance.name = validated_data.get('name',instance.name)
        instance.save()
        return instance
    class Meta:
        model = Category
        fields = '__all__'

class VacancySerializer(serializers.ModelSerializer):
    def create(self,validated_data):
        vacancy = Vacancy.objects.create(**validated_data)
        return vacancy

    def update(self,instance,validated_data):
        instance.name = validated_data.get('name',instance.name)
        instance.description = validated_data.get('description',instance.description)
        instance.salary = validated_data.get('salary',instance.salary)
        instance.company = validated_data.get('company',instance.company)
        instance.category_id = validated_data.get('category_id',instance.category_id)
        instance.save()
        return instance
    class Meta:
        model = Vacancy
        fields = '__all__'


class CompanySerializer(serializers.ModelSerializer):
    def create(self,validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self,instance,validated_data):
        instance.name = validated_data.get('name',instance.name)
        instance.description = validated_data.get('description',instance.description)
        instance.city = validated_data.get('city',instance.city)
        instance.address = validated_data.get('address',instance.address)
        instance.save()
        return instance
    class Meta:
        model = Company
        fields = '__all__'

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only':True}
        }

    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user