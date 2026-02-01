import requests
import os
from django.conf import settings
from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from .models import Project, ContactMessage, Profile
from .serializers import ProjectSerializer, ContactMessageSerializer, ProfileSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
        """Loyiha ma'lumotlarini faqat o'qish uchun (Hamma ko'rishi mumkin)"""
        queryset = Project.objects.all().order_by('-created_at') # Eng yangilari birinchi
        serializer_class = ProjectSerializer

class ContactViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    Faqat xabar yuborish uchun. 
    Botlardan himoya (Throttling) va Telegram bildirishnomasi qo'shilgan.
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    throttle_classes = [AnonRateThrottle] # settings.py dagi 'anon' limitiga amal qiladi

    def create(self, request, *args, **kwargs):
        # 1. Foydalanuvchining haqiqiy IP manzilini aniqlash
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')

        # 2. Ma'lumotlarni tekshirish (Validation)
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            # Bazaga IP manzil bilan birga saqlash
            instance = serializer.save(user_ip=ip)

            # 3. Telegramga xabar yuborish (Faqat Backendda!)
            self.send_telegram_notification(instance, ip)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def send_telegram_notification(self, instance, ip):
        """Telegram botga xabar yuborish funksiyasi"""
        bot_token = getattr(settings, 'TELEGRAM_BOT_TOKEN', None)
        chat_id = getattr(settings, 'TELEGRAM_CHAT_ID', None)

        if not bot_token or not chat_id:
            print("Telegram sozlamalari topilmadi!")
            return

        message_text = (
            f"🚀 <b>Yangi Xabar (Portfolio)</b>\n\n"
            f"👤 <b>Ism:</b> {instance.name}\n"
            f"📧 <b>Email:</b> {instance.email}\n"
            f"📌 <b>Mavzu:</b> {instance.subject}\n"
            f"🌐 <b>IP:</b> {ip}\n\n"
            f"💬 <b>Xabar:</b>\n<i>{instance.message}</i>"
        )

        url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        payload = {
            "chat_id": chat_id,
            "text": message_text,
            "parse_mode": "HTML"
        }

        try:
            requests.post(url, data=payload, timeout=10)
        except Exception as e:
            print(f"Telegram yuborishda xato: {e}")

class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer