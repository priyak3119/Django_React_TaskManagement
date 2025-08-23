from django.contrib import admin
from django.urls import path, include

# Customize admin site
admin.site.site_header = "TaskFlow Admin"
admin.site.site_title = "TaskFlow Admin Portal"
admin.site.index_title = "Welcome to TaskFlow Administration"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tasks.urls')),
]