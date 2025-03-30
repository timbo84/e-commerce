"use client";

import { useState } from "react";
import styles from "./Cart.module.css";
import Link from "next/link";

export default function Cart() {
  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      quantity: 1,
      image: "/images/wireless-headphones.jpg",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 149.99,
      quantity: 2,
      image: "/images/smartwatch.jpg",
    },
  ]);

  // Helper functions
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
            <img src={item.image} alt={item.name} className={styles.image} />
            <div className={styles.details}>
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className={styles.quantity}>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
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
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h3>Total: ${calculateTotal()}</h3>

        <Link href="/checkout" className={styles.removeButton}>
          Proceed To Checkout
        </Link>
      </div>
    </div>
  );
}
