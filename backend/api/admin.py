from django.contrib import admin
from .models import Project, ContactMessage, Profile

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'year', 'created_at')
    list_filter = ('category', 'year', 'created_at')
    search_fields = ('title', 'tech_stack', 'objective')
    list_editable = ('year',)
    fieldsets = (
        ('Asosiy ma\'lumotlar', {
            'fields': ('title', 'category', 'year', 'image')
        }),
        ('Texnik tafsilotlar', {
            'fields': ('objective', 'solution', 'tech_stack')
        }),
        ('Havolalar', {
            'fields': ('github_link', 'demo_link')
        }),
    )

@admin.register(ContactMessage)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'subject', 'user_ip', 'created_at', 'is_read')
    list_filter = ('is_read', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')
    readonly_fields = ('name', 'email', 'subject', 'message', 'user_ip', 'created_at')

    actions = ['mark_as_read']

    def mark_as_read(self, request, queryset):
        queryset.update(is_read=True)
    mark_as_read.short_description = "Tanlangan xabarlarni o'qilgan deb belgilash"

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email')