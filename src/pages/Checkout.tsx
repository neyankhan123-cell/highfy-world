import React, { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { Button } from '../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, CreditCard, Truck, User } from 'lucide-react';

export function Checkout() {
  const { items, total, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate('/order-success'); // In a real app
      alert('Order placed successfully!');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-serif font-bold mb-8 text-center">Checkout</h1>

      <div className="flex justify-center mb-12">
        <div className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
            <User className="h-5 w-5" />
          </div>
          <div className={`w-20 h-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
            <Truck className="h-5 w-5" />
          </div>
          <div className={`w-20 h-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`} />
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
            <CreditCard className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <form onSubmit={handlePlaceOrder} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" required className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" required className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input type="text" required className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input type="text" required className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                <input type="text" required className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-6 mt-8">Payment Details</h2>
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input type="text" placeholder="0000 0000 0000 0000" required className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input type="text" placeholder="MM/YY" required className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                  <input type="text" placeholder="123" required className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : `Pay $${(total() * 1.1).toFixed(2)}`}
            </Button>
          </form>
        </div>

        <div className="md:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-16 w-16 bg-white rounded-md overflow-hidden border">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    <p className="text-sm font-medium">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${total()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax (10%)</span>
                <span>${(total() * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total</span>
                <span>${(total() * 1.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
