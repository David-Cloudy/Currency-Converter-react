import styles from "./Form.module.css";

const Form = (props) => {
  const calculate = (event) => {
    event.preventDefault();
    const amount = event.currentTarget.elements.amount.value;
    const currency = event.currentTarget.elements.currency.value;
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data?.rates?.length) {
          window.alert("Wystąpił błąd pobierania danych");
          return;
        }
        const rate = data.rates[0].mid;
        const result = (amount * rate).toFixed(2);
        props.onResultChange(result);
      });
  };
  return (
    <form onSubmit={calculate} className={styles.form} id="form">
      <input
        className={styles.input}
        name="amount"
        id="amountInput"
        type="number"
        min="0.01"
        step="0.01"
        required
        placeholder="Wpisz kwotę"
      />
      <div>
        <select className={styles.selector} name="currency">
          <option value="EUR" id="eur">
            Euro
          </option>
          <option value="USD" id="usd">
            Dolar amerykański
          </option>
          <option value="CHF" id="chf">
            Frank szwajcarski
          </option>
        </select>
        <button className={styles.countButton} id="countButton" type="submit">
          Przelicz*
        </button>
      </div>
    </form>
  );
};

export default Form;
