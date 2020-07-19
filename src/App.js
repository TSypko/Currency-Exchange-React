import React, { useState } from 'react';
import Container from './Container';
import Header from './Header';
import Form from './Form';
import { currencies } from './utils/currencies';

function App() {

  const [result, setResult] = useState("");
  const calculateResult = (amount, currencyFrom, currencyTo, currencyToName) => {
    setResult(`${(amount * currencyFrom / currencyTo).toFixed(2)} ${currencyToName}`);
  }

  return (
    <Container>
      <Header title="simple currency exchange" />
      <Form
        currencies={currencies}
        result={result}
        calculateResult={calculateResult}
      />
    </Container>
  );
}

export default App;
