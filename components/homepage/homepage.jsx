import styles from './HomePage.module.css';


  

export default function Homepage() {
const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "/images/wireless-headphones.jpg",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 149.99,
      image: "/images/smartwatch.jpg",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 49.99,
      image: "/images/bluetooth-speaker.jpg",
    },
  ];

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Welcome to ShopName</h1>
        <p>Your one-stop shop for amazing deals!</p>
        <button>Shop Now</button>
      </section>

      {/* Featured Products */}
      <section className={styles.featured}>
        <h2>Featured Products</h2>
        <div className={styles.productGrid}>
          {featuredProducts.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}