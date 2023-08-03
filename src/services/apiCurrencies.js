const fetchCurrecies = () => {
  fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`)
    .then((response) => response.json())
    .catch(() => {
      window.alert("Wystąpił błąd pobierania danych");
    });
};

export { fetchCurrecies };
