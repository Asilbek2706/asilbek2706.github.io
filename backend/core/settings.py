import os
from pathlib import Path
from dotenv import load_dotenv # .env faylni o'qish uchun

# 1. Path sozlamalari
BASE_DIR = Path(__file__).resolve().parent.parent

# 2. .env faylini yuklash (BU JUDA MUHIM!)
load_dotenv(os.path.join(BASE_DIR, '.env'))

# 3. Xavfsizlik kaliti (Production uchun .env dan olish yaxshiroq)
SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', 'django-insecure-default-key-asilbek')

# 4. Debug rejimi
DEBUG = True # Sayt tayyor bo'lgach False qiling

ALLOWED_HOSTS = ['*'] # Lokalda hamma IPga ruxsat berish

# 5. Ilovalar ro'yxati
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Qo'shimcha paketlar
    'rest_framework',
    'corsheaders',

    # Sizning ilovangiz
    'api',
]

# 6. Middleware (Tartib juda muhim!)
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware', # Eng tepada turishi kerak
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# 7. CORS sozlamalari (React bilan bog'lanish uchun)
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5173", # Vite uchun
    "http://127.0.0.1:5173",
]

ROOT_URLCONF = 'core.urls' # Papka nomingiz 'core' bo'lsa to'g'ri

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

# 8. Ma'lumotlar bazasi
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# 9. Django REST Framework sozlamalari (Throttling qo'shildi)
REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_RATES': {
        'anon': '5/minute',  # Xakerlik hujumidan saqlanish uchun minutiga 5 ta xabar limit
        'user': '100/minute',
    }
}

# 10. Statik va Media fayllar (Rasm yuklash uchun)
STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# 11. Telegram Sozlamalari (Backend .env dan o'qiydi)
TELEGRAM_BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN')
TELEGRAM_CHAT_ID = os.getenv('TELEGRAM_CHAT_ID')

# 12. Boshqa sozlamalar
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Asia/Tashkent'
USE_I18N = True
USE_TZ = True
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'