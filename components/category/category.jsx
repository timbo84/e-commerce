import styles from './Category.module.css';

export default function Category({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className={styles.categoryList}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.categoryButton} ${
            category === selectedCategory ? styles.active : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}