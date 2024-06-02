from django.urls import path
from .views import paste_data_info_list, contact_info_list_create,paste_data_info

urlpatterns = [
    path('paste_data_info/', paste_data_info_list, name='paste_data_info_list_create'),
    path('paste_data_info_code/', paste_data_info, name='paste_data_info_list_create'),
    path('contact_info/', contact_info_list_create, name='contact_info_list_create'),
]