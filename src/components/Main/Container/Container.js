import styles from "./Container.module.css";
import Form from "./Form/Form";
import { useState } from "react";

const Container = () => {
  const [result, setResult] = useState("");

  const handleOnResultChange = (result) => {
    setResult(result);
  };

  return (
    <div className={styles.container}>
      <Form onResultChange={handleOnResultChange} />
      {result ? <h2 className={styles.resultWrapper}>{result} zł</h2> : null}
    </div>
  );
};

export default Container;
