from django.db import models
from PIL import Image  # Rasmlarni siqish uchun (pip install Pillow)
import os

class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name="Loyiha nomi")
    category = models.CharField(
        max_length=100,
        default="Web Development",
        verbose_name="Kategoriya"
    )
    year = models.CharField(max_length=4, default="2026", verbose_name="Yil")
    objective = models.TextField(default="Loyiha maqsadi...", verbose_name="Maqsad")
    solution = models.TextField(default="Texnik yechim...", verbose_name="Yechim")
    image = models.ImageField(upload_to='projects/', verbose_name="Loyiha rasmi")
    tech_stack = models.CharField(
        max_length=250,
        default="React, JS",
        help_text="Vergul bilan ajrating",
        verbose_name="Texnologiyalar"
    )
    github_link = models.URLField(blank=True, null=True, verbose_name="GitHub")
    demo_link = models.URLField(blank=True, null=True, verbose_name="Live Demo")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Loyiha"
        verbose_name_plural = "Loyihalar"
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.image:
            self.optimize_image(self.image.path)

    def optimize_image(self, image_path):
        img = Image.open(image_path)
        if img.height > 1080 or img.width > 1080:
            output_size = (1080, 1080)
            img.thumbnail(output_size)
            img.save(image_path, quality=85, optimize=True)

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    user_ip = models.GenericIPAddressField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Kontakt xabari"
        verbose_name_plural = "Kontakt xabarlari"

    def __str__(self):
        return f"{self.name} - {self.subject}"

class Profile(models.Model):
    full_name = models.CharField(max_length=100, verbose_name="To'liq ism")
    image = models.ImageField(upload_to='profile/', verbose_name="Profil rasmi")
    bio = models.TextField(verbose_name="Bio (HTML ruxsat etiladi)")
    email = models.EmailField(verbose_name="Email")
    telegram = models.URLField(blank=True, verbose_name="Telegram link")
    instagram = models.URLField(blank=True, verbose_name="Instagram link")
    github = models.URLField(blank=True, verbose_name="GitHub link")
    linkedin = models.URLField(blank=True, verbose_name="LinkedIn link")

    class Meta:
        verbose_name = "Profil"
        verbose_name_plural = "Profil ma'lumotlari"

    def __str__(self):
        return self.full_name

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.image:
            self.optimize_image(self.image.path)

    def optimize_image(self, image_path):
        img = Image.open(image_path)
        # Profil rasmi kichikroq bo'lsa ham bo'ladi (800px)
        if img.height > 800 or img.width > 800:
            img.thumbnail((800, 800))
            img.save(image_path, quality=90, optimize=True)