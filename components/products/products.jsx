'use client';

import { useState } from 'react';
import Category from '@/components/category/category';
import ProductList from '@/components/productList/productList';
import styles from './Products.module.css';

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Wireless Headphones", category: "Electronics" },
    { id: 2, name: "Smartwatch", category: "Electronics" },
    { id: 3, name: "T-Shirt", category: "Clothing" },
    { id: 4, name: "Sunglasses", category: "Accessories" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className={styles.productsPage}>
      <Category
        categories={["All", "Electronics", "Clothing", "Accessories"]}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}