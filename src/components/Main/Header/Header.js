import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        style={{
          backgroundImage: `url("/images/Route66.jpg")`,
        }}
        alt="logo"
      />
      <h1 className={styles.headerText}>Przelicznik walut</h1>
    </header>
  );
};

export default Header;
