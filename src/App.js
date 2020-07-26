import React from 'react';
import Container from './Container';
import Header from './Header';
import Clock from './Clock';
import Form from './Form';

function App() {

  return (
    <Container>
      <Header title="simple currency exchange" />
      <Clock/>
      <Form 
      />
    </Container>
  );
}

export default App;
