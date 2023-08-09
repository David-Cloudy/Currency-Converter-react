import styles from "./CurrencyConverter.module.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function CurrencyConverter() {
  return (
    <div className={styles.currencyConverter}>
      <Main />
      <Footer />
    </div>
  );
}

export default CurrencyConverter;
