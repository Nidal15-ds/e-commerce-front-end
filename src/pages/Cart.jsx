import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);

    setTimeout(() => {
      setIsCheckingOut(false);
      clearCart(); // <-- Clears the cart and resets the badge count immediately!
      setShowSuccessModal(true);
    }, 2000);
  };

  if (cart.length === 0 && !showSuccessModal) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products" className="shop-now-btn">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-header">Shopping Cart</h1>

      <div className="cart-layout">
        <div className="cart-items-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.title} className="cart-item-img" />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <div className="cart-item-price">${item.price.toFixed(2)}</div>
                
                <div className="cart-item-actions">
                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(item.id, -1)} className="qty-btn">-</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="qty-btn">+</button>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          
          <button 
            onClick={handleCheckout} 
            className="checkout-btn"
            disabled={isCheckingOut}
          >
            {isCheckingOut ? (
              <>
                <span className="spinner"></span> Processing...
              </>
            ) : (
              'Proceed to Checkout'
            )}
          </button>
        </div>
      </div>

      {showSuccessModal && (
        <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <span className="modal-icon">🎉</span>
            <h3 className="modal-title">Order Placed Successfully!</h3>
            <p className="modal-text">Thank you for your purchase. Your order has been placed and is being processed.</p>
            <Link 
              to="/products" 
              className="shop-now-btn" 
              style={{ marginTop: '1rem', width: '100%', display: 'block', textAlign: 'center' }}
              onClick={() => setShowSuccessModal(false)}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}