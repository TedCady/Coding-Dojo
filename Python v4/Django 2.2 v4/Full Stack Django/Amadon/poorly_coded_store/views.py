from django.shortcuts import render, redirect
from .models import Order, Product

def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)

def checkout(request):
    item=Product.objects.get(id=request.POST["product_id"])
    quantity_from_form = int(request.POST["quantity"])
    price_from_form = float(item.price)
    total_charge = quantity_from_form * price_from_form
    print("Charging credit card...")
    Order.objects.create(quantity_ordered=quantity_from_form, total_price=total_charge)
    return redirect("/checkout/thank_you")

def checkout2(request):
    order=Order.objects.last()
    order_total=order.total_price
    order_quantity=order.quantity_ordered
    i = 0
    j = 0
    for charge in Order.objects.all():
        i = i + charge.total_price
        j = j + charge.quantity_ordered
    context = {
        'order_total':float(order_total),
        'all_order_sum':float(i),
        'all_order_quantity':int(j)
    }
    return render(request, "store/checkout.html", context)