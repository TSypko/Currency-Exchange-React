import React from 'react';
import Container from './Container';
import Header from './Header';
import Form from './Form';
import {currencies} from './utils/currencies';

function App() {
  return (
    <Container>
      <Header title="simple currency exchange" />
      <Form title="conventer" currencies={currencies} />
    </Container>
  );
}

export default App;
