from django.urls import path, include, re_path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from .views import *
##auth
from . import views

router =routers.DefaultRouter()
router.register(r'employee',EmployeeViewSet)
router.register(r'tribes',TribeViewSet)
router.register(r'vacation',VacationViewSet)
router.register(r'team',EquipeViewSet)

#http://localhost/employee/1
urlpatterns=[
    path('', include(router.urls)),
    re_path('signup', views.signup),
    re_path('login', views.login),
    re_path('test_token', views.test_token),
]

#les views. sont des methodes non classes