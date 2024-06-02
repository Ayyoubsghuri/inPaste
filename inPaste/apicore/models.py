from django.db import models
import uuid
from datetime import datetime, timedelta
from background_task import background
from django.utils import timezone


# Here goes the Paste data model
class PasteDataInfo(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(max_length=3500, null=True, unique=False)
    add_on = models.DateTimeField(auto_now=True)
    tags = models.CharField(max_length=250) 
    has_been_read = models.BooleanField(default=False)
    
    # Boolean field to indicate whether the paste is password protected
    password_protected = models.BooleanField(default=False)
    password_key = models.CharField(max_length=30, null=True, blank=True)
    
    # Unique identifier for each paste
    code = models.CharField(max_length=18 ,blank=True)
    
    # Expiration choices
    EXPIRATION_CHOICES = [
        ('never', 'Never'),
        ('burn_after_read', 'Burn After Read'),
        ('1day', '1 Day'),
        ('1week', '1 Week'),
        ('1month', '1 Month'),
    ]
    
    # Expiration date and time for the paste
    expiration_choice = models.CharField(max_length=15, choices=EXPIRATION_CHOICES, default='never')
    
        #  Calculate expiration date based on the user's chosen expiration choice    
    def save(self ,*args, **kwargs):
        if not self.code:
            self.code= str(uuid.uuid4()).replace("-","")[:18]
            
        if self.expiration_choice == 'never'or self.expiration_choice == 'burn_after_read':
            self.expiration_date = None
        elif self.expiration_choice == '1day':
            self.expiration_date = self.add_on + timedelta(days=1)
        elif self.expiration_choice == '1week':
            self.expiration_date = self.add_on + timedelta(weeks=1)
        elif self.expiration_choice == '1month':
            self.expiration_date = self.add_on + timedelta(days=30)
        super().save(*args, **kwargs)
    

# here goes for contactinfo model
class ContactInfo(models.Model):
    email = models.EmailField(max_length=200)
    description = models.TextField(max_length=1000, null=True)
    add_on = models.DateTimeField(auto_now=True)

@background(schedule=timedelta(hours=12))  # Runs every 12h to check and delete expired pastes
def delete_expired_pastes():
    now = timezone.now()
    expired_pastes = PasteDataInfo.objects.filter(expiration_date__lte=now)
    for paste in expired_pastes:
        if paste.has_been_read:
            paste.delete()