from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import PasteDataInfo, ContactInfo
from .serializers import *

@api_view(['POST'])
def paste_data_info_list(request):
    # if request.method == 'GET':
    #     paste_data_info = PasteDataInfo.objects.all()
    #     serializer = PasteDataInfoSerializer(paste_data_info, many=True)
    #     return Response(serializer.data)
    # to save new pastes
    if request.method == 'POST':
        serializer = PasteDataInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def paste_data_info(request):
    if request.method == 'POST':
        try:
            code = request.data["code"]
            paste_data_info = PasteDataInfo.objects.filter(code=code).first()
            serializer = PasteDataInfoSerializer(paste_data_info, many=True)
            if paste_data_info:
                # check if code have password enabled whit it
                if paste_data_info.password_protected:
                    if(request.data["password"]):
                        password = request.data["password"]
                        protected_data = PasteDataInfo.objects.get(code=code,password_key=password)
                        serializer_for_protected_data = PasteDataInfoSerializer(paste_data_info, many=True)
                        if paste_data_info.exists():
                            return Response(serializer_for_protected_data, status=status.HTTP_200_OK)
                        else:
                            return Response({"incorrect": "You Password is incorrect"}, status=status.HTTP_200_OK)
                    else:
                        return Response({"protected": "You Password to access this Paste"}, status=status.HTTP_200_OK)
                else:
                    return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({"error": "No data found for the given code."}, status=status.HTTP_404_NOT_FOUND)
        except KeyError:
            return Response({"error": "No 'code' parameter provided in the request."}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def contact_info_list_create(request):
    if request.method == 'POST':
        serializer = ContactInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)