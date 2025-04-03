"use client";

import { useRouter } from "next/navigation"; // Ensure this import is correct
import { useEffect, useState } from "react";
import styles from "./Checkout.module.css";

export default function Checkout() {
  const router = useRouter(); // Initialize the router object

  const [cartItems, setCartItems] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({
    name: "John Doe",
    address: "123 Main St",
    city: "Springfield",
    zip: "12345",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "4111111111111111",
    expiry: "12/25",
    cvv: "123",
  });

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save shipping info to localStorage
    localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));

    // Redirect to confirmation page
    router.push("/confirmation"); // Navigate to confirmation page
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.checkout}>
      <h2 className={styles.heading}>Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* Cart Summary Section */}
        <section className={styles.cartSummary}>
          <h3>Cart Summary</h3>
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

        {/* Shipping Information Section */}
        <section className={styles.shippingInfo}>
          <h3>Shipping Information</h3>
          <label htmlFor="name">Full Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={shippingInfo.name}
            onChange={handleShippingChange}
            className={styles.input}
            required
          />
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={handleShippingChange}
            className={styles.input}
            required
          />
          <label htmlFor="city">City:</label>
          <input
            id="city"
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleShippingChange}
            className={styles.input}
            required
          />
          <label htmlFor="zip">Zip Code:</label>
          <input
            id="zip"
            type="text"
            name="zip"
            value={shippingInfo.zip}
            onChange={handleShippingChange}
            className={styles.input}
            required
          />
        </section>

        {/* Payment Information Section */}
        <section className={styles.paymentInfo}>
          <h3>Payment Information</h3>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            id="cardNumber"
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handlePaymentChange}
            className={styles.input}
            required
          />
          <label htmlFor="expiry">Expiry (MM/YY):</label>
          <input
            id="expiry"
            type="text"
            name="expiry"
            value={paymentInfo.expiry}
            onChange={handlePaymentChange}
            className={styles.input}
            required
          />
          <label htmlFor="cvv">CVV:</label>
          <input
            id="cvv"
            type="text"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handlePaymentChange}
            className={styles.input}
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