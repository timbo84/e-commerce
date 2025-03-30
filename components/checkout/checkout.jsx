'use client';

import { useState } from 'react';
import styles from './Checkout.module.css';

export default function Checkout() {
  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 1 },
    { id: 2, name: "Smartwatch", price: 149.99, quantity: 2 },
  ];

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", { shippingInfo, paymentInfo, cartItems });
    alert("Thank you for your order!");
  };

  return (
    <div className={styles.checkout}>
      <h2 className={styles.checkoutHeading}>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <section className={styles.section}>
          <h3>Cart Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className={styles.cartTotal}>
            <strong>Total:</strong> ${calculateTotal()}
          </div>
        </section>

        <section className={styles.section}>
          <h3>Shipping Information</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shippingInfo.name}
            onChange={handleShippingChange}
            className={styles.shippingInput}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={handleShippingChange}
            className={styles.shippingInput}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingInfo.city}
            onChange={handleShippingChange}
            className={styles.shippingInput}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={shippingInfo.zip}
            onChange={handleShippingChange}
            className={styles.shippingInput}
            required
          />
        </section>

        <section className={styles.section}>
          <h3>Payment Information</h3>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={paymentInfo.cardNumber}
            onChange={handlePaymentChange}
            className={styles.shippingInput}
            required
          />
          <input
            type="text"
            name="expiry"
            placeholder="Expiry (MM/YY)"
            value={paymentInfo.expiry}
            onChange={handlePaymentChange}
            className={styles.shippingInput}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={paymentInfo.cvv}
            onChange={handlePaymentChange}
            className={styles.shippingInput}
            required
          />
        </section>

        <button type="submit" className={styles.submitButton}>
          Place Order
        </button>
      </form>
    </div>
  );
}