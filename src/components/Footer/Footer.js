import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        * Kwoty przeliczane są na podstawie aktualnych średnich kursów walut
        obcych opublikowanych przez Narodowy Bank Polski
      </p>
    </footer>
  );
};

export default Footer;
