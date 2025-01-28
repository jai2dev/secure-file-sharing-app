from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser
from rest_framework.permissions import IsAuthenticated
from .models import File

class FileUploadView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [FileUploadParser]

    def post(self, request, format=None):
        file = request.FILES.get('file')
        if file:
            file_instance = File.objects.create(
                user=request.user,
                name=file.name,
                file=file
            )
            return Response({"message": "File uploaded successfully"}, status=201)
        return Response({"error": "No file provided"}, status=400)

class UserFilesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        files = File.objects.filter(user=request.user)
        data = [{"id": file.id, "name": file.name, "url": file.file.url} for file in files]
        return Response(data)
