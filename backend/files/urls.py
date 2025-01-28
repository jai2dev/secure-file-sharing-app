from django.urls import path
from .views import FileUploadView, UserFilesView

urlpatterns = [
    path('upload/', FileUploadView.as_view(), name='file-upload'),
    path('list/', UserFilesView.as_view(), name='user-files'),
]
