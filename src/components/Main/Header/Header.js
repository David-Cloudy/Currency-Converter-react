import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="https://cataas.com/cat" alt="" />
      <h1 className={styles.headerText}>Przelicznik walut</h1>
    </header>
  );
};

export default Header;
