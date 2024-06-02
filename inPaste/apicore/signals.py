from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings


@receiver(post_save, sender=ContactInfo)
def send_contact_email(sender, instance, created, **kwargs):
    if created:
        admin_email = settings.ADMIN_EMAIL
        subject = 'New Contact Information Submitted'
        message = f'Email: {instance.email}\nDescription: {instance.description}\n Send from inPaste ✍️'
        send_mail(subject, message, admin_email, [admin_email])