"use client";

import { useState } from "react";
import styles from "./Dashboard.module.css";
import { FaBox, FaShoppingCart } from "react-icons/fa"; // Import icons

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("Products");

  const renderContent = () => {
    switch (activeSection) {
      case "Products":
        return <Products />;
      case "Orders":
        return <Orders />;
      default:
        return <Products />;
    }
  };

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <h2>Admin Dashboard</h2>
        <nav>
          <button onClick={() => setActiveSection("Products")}>
            <FaBox className={styles.icon} /> Products
          </button>
          <button onClick={() => setActiveSection("Orders")}>
            <FaShoppingCart className={styles.icon} /> Orders
          </button>
        </nav>
      </aside>
      <main className={styles.mainContent}>{renderContent()}</main>
    </div>
  );
}

function Products() {
    const [products, setProducts] = useState([
      { id: 1, name: "Wireless Headphones", price: 99.99 },
      { id: 2, name: "Smartwatch", price: 149.99 },
    ]);
  
    const addProduct = () => {
      const newProduct = { id: Date.now(), name: "New Product", price: 0 };
      setProducts([...products, newProduct]);
    };
  
    const deleteProduct = (id) => {
      setProducts(products.filter((product) => product.id !== id));
    };
  
    return (
      <div className={styles.products}>
        <h3>Manage Products</h3>
        <button className={styles.addButton} onClick={addProduct}>
          + Add Product
        </button>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
              <button
                className={styles.deleteButton}
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function Orders() {
    const [orders, setOrders] = useState([
      { id: 1, customer: "John Doe", total: 149.99, status: "Pending" },
      { id: 2, customer: "Jane Smith", total: 99.99, status: "Shipped" },
    ]);
  
    const updateStatus = (id, newStatus) => {
      setOrders(
        orders.map((order) =>
          order.id === id ? { ...order, status: newStatus } : order
        )
      );
    };
  
    return (
      <div>
        <h3>Manage Orders</h3>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              {order.customer} - ${order.total.toFixed(2)} - {order.status}{" "}
              <select
                onChange={(e) => updateStatus(order.id, e.target.value)}
                value={order.status}
              >
                <option value="Pending">Pending</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </li>
          ))}
        </ul>
      </div>
    );
  }