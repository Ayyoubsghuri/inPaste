from django.contrib import admin
from .models import PasteDataInfo, ContactInfo

# this for make list in admin more readable and easy to understand
class PasteAdmin(admin.ModelAdmin):
    list_display = ('title', 'code', 'add_on')
 
class ContactAdmin(admin.ModelAdmin):
    list_display = ('email', 'add_on')   
    

admin.site.register(PasteDataInfo,PasteAdmin)
admin.site.register(ContactInfo,ContactAdmin)