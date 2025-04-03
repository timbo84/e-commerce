"use client";

import { useState } from "react";
import styles from "./Products.module.css";

const mockProducts = [
  { id: 1, name: "Wireless Headphones", price: 99.99, category: "Electronics" },
  { id: 2, name: "Smartwatch", price: 149.99, category: "Electronics" },
  { id: 3, name: "T-Shirt", price: 19.99, category: "Clothing" },
  { id: 4, name: "Sunglasses", price: 49.99, category: "Accessories" },
  { id: 5, name: "Bluetooth Speaker", price: 79.99, category: "Electronics" },
  { id: 6, name: "Jeans", price: 39.99, category: "Clothing" },
];

export default function ProductListingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on search and category
  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.productsPage}>
      {/* Search and Filter Section */}
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={styles.categorySelect}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}