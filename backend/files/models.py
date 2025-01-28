from django.db import models
from django.conf import settings

class File(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='encrypted_files/')
    created_at = models.DateTimeField(auto_now_add=True)
