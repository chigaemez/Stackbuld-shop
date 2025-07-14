import { useCart, useCartTotals, useCartStore } from '../../store/CartStore';
import { useState } from 'react';

const CheckoutPage = () => {
  const cart = useCart();
  const { totalPrice } = useCartTotals();
  const clearCart = useCartStore((state) => state.clearCart);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handlePlaceOrder = () => {
    const randomId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(randomId);
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {orderPlaced ? (
        <div className="text-center mt-10">
          <h2 className="text-3xl font-semibold text-green-600">Thank you for your order!</h2>
          <p className="text-lg mt-4">Your Order ID is: <strong>{orderId}</strong></p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="border rounded mb-6 overflow-hidden">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between p-4 border-b last:border-none">
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <p className="font-bold text-gray-800">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-lg font-semibold mb-6">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
