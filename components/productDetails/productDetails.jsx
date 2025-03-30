import styles from './ProductDetails.module.css';

export default function ProductDetails({ product }) {
  // Mock data for demonstration purposes
  const demoProduct = {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
    image: "/images/wireless-headphones.jpg",
  };

  // Use the passed-in product or fallback to demoProduct
  const currentProduct = product || demoProduct;

  return (
    <div className={styles.productDetails}>
      <img
        src={currentProduct.image}
        alt={currentProduct.name}
        className={styles.image}
      />
      <h2>{currentProduct.name}</h2>
      <p>{currentProduct.description}</p>
      <p className={styles.price}>${currentProduct.price.toFixed(2)}</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
}