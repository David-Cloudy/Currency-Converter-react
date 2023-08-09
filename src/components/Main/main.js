import styles from "./Main.module.css";
import Container from "./Container/Container";
import Header from "./Header/Header";

const Main = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Container />
    </main>
  );
};

export default Main;
