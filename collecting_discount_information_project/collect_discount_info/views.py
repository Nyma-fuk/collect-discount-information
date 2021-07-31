from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello Login. BOOOOOOOOO.")

def profile(request):
    if request.user.is_authenticated:
        if request.user.is_superuser:
            return HttpResponse("You are a superuser.")
            #あとで使う
            #return redirect(HttpResponse("Hello Login. You're at the collect_discount_info index."))
        else:
            return HttpResponse("Hello Login. You're at the collect_discount_info index.")
    else:
        return HttpResponse("You can't use it. Please log in.")