from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import *
from .models import *

###auth
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
# Create your views here.

class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class    =EmployeeSerializer
    queryset = Employee.objects.all().order_by('-id')

class TribeViewSet(viewsets.ModelViewSet):
    serializer_class    =TribeSerializer
    queryset = Tribe.objects.all().order_by('-id_trb')

class VacationViewSet(viewsets.ModelViewSet):    
    serializer_class    =VacationSerializer
    queryset = Vacation.objects.all().order_by('-id_vac')

class EquipeViewSet(viewsets.ModelViewSet):
    serializer_class    =EquipeSerializer
    queryset = Equipe.objects.all().order_by('-id_eq')


###auth
@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    return Response({'token': token.key, 'user': serializer.data})    
    #return Response({})

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        #ici on stocke pas mdp clair mai plutôt sa version haché
        user.save()
        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
    

@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response("passed for {}".format(request.user.email))