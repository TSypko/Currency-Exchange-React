import React, { useState } from 'react';
import Container from './Container';
import Header from './Header';
import Form from './Form';

function App() {

  const [result, setResult] = useState("");
  const calculateResult = (amount, currencyFrom, currencyTo) => {
    setResult(
      (amount * currencyFrom / currencyTo).toFixed(2)
    );
  }

  return (
    <Container>
      <Header title="simple currency exchange" />
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </Container>
  );
}

export default App;
