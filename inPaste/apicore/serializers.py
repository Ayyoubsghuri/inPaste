from rest_framework import serializers
from .models import PasteDataInfo, ContactInfo

class PasteDataInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PasteDataInfo
        fields = '__all__'  
class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = '__all__'