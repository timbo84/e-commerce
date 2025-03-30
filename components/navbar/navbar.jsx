import SearchBar from '../searchBar/searchBar';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>ShopName</div>
      <ul className={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/productList">Products</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
      {/* <SearchBar /> */}
    </nav>
  );
}