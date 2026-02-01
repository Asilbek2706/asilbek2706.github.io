from rest_framework import serializers
from .models import Project, ContactMessage, Profile

class ProfileSerializer(serializers.ModelSerializer):
    """
    Admin panel orqali boshqariladigan profil ma'lumotlari uchun.
    Rasm URL manzili avtomatik ravishda to'liq (absolute) holatda qaytadi.
    """
    class Meta:
        model = Profile
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    """
    Portfoliodagi loyihalar uchun serializer.
    tech_stack string formatida saqlanadi va React'da .split(',') orqali massivga aylantiriladi.
    """
    class Meta:
        model = Project
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    """
    Kontakt formasi xabarlari uchun serializer.
    Xavfsizlik uchun user_ip va is_read maydonlari faqat o'qish uchun (read-only).
    """
    class Meta:
        model = ContactMessage
        fields = [
            'id', 'name', 'email', 'subject',
            'message', 'user_ip', 'is_read', 'created_at'
        ]
        read_only_fields = ['id', 'user_ip', 'is_read', 'created_at']

    def validate_email(self, value):
        """Email formatini qo'shimcha tekshirish (ixtiyoriy)"""
        if not "@" in value:
            raise serializers.ValidationError("To'g'ri email manzilini kiriting.")
        return value