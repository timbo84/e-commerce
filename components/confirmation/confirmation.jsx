"use client";

import { useEffect, useState } from "react";
import styles from "./Confirmation.module.css";

export default function OrderConfirmation() {
  const [cartItems, setCartItems] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({});

  useEffect(() => {
    // Retrieve data from localStorage
    const savedCartItems = localStorage.getItem("cartItems");
    const savedShippingInfo = localStorage.getItem("shippingInfo");

    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
    if (savedShippingInfo) {
      setShippingInfo(JSON.parse(savedShippingInfo));
    }

    // Clear localStorage (optional: simulate a "processed" state)
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingInfo");
  }, []);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.confirmation}>
      <h2 className={styles.heading}>Thank You for Your Order!</h2>
      <p className={styles.message}>
        Your order has been successfully placed. Below is a summary of your order:
      </p>

      {/* Order Summary */}
      <section className={styles.orderSummary}>
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className={styles.total}>
          <strong>Total:</strong> ${calculateTotal()}
        </div>
      </section>

      {/* Shipping Information */}
      <section className={styles.shippingDetails}>
        <h3>Shipping Details</h3>
        <p><strong>Name:</strong> {shippingInfo.name}</p>
        <p><strong>Address:</strong> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.zip}</p>
      </section>

      {/* Next Steps */}
      <section className={styles.nextSteps}>
        <h3>What Happens Next?</h3>
        <p>We’ve sent a confirmation email with your order details. Your items will be shipped shortly!</p>
      </section>
    </div>
  );
}