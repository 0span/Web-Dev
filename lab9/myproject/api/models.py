from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=25)
    address = models.TextField()

    def __str__(self):
        return f'Company name :{self.name}, addres: {self.city}, {self.address} '

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def to_JSON(self):
        return {
            'id': self.id,
            'name': self.name,
            # 'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='companies')

    def __str__(self):
        return f'Vacancy name :{self.name}, company: {self.company}, salary: {self.salary} '

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def to_JSON(self):
        return {
            'id': self.id,
            'name': self.name,
            # 'description': self.description,
            'salary': self.salary,
            'company':self.company.name

        }
