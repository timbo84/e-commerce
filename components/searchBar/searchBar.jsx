'use client';

import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  // Mock product data
  const products = [
    { id: 1, name: "Wireless Headphones" },
    { id: 2, name: "Smartwatch" },
    { id: 3, name: "Bluetooth Speaker" },
    { id: 4, name: "Gaming Mouse" },
  ];

  // State to track search input and filtered products
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.input}
      />
      <div className={styles.results}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.resultItem}>
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
}