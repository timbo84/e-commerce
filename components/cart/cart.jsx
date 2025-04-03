"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Cart.module.css";

const initialCartItems = [
  { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 1 },
  { id: 2, name: "Smartwatch", price: 149.99, quantity: 2 },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const router = useRouter();

  // Save updated cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    router.push("/checkout"); // Navigate to the checkout page
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <div className={styles.quantity}>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            <button
              className={styles.removeButton}
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <strong>Total:</strong> ${calculateTotal()}
      </div>
      <button className={styles.checkoutButton} onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}