import React from 'react';
import Container from './Container';
import Header from './Header';
import Form from './Form';
import * as flag from './flags';


function App() {

  const currencies = [
    {
      name: "Polish Zloty",
      shortname: "PLN",
      rate: 1,
      flagImage: flag.plnFlag(),
    },
    {
      name: "Euro",
      shortname: "EUR",
      rate: 4.4532,
      flagImage: flag.euroFlag(),
    },
    {
      name: "US Dollar",
      shortname: "USD",
      rate: 3.9395,
      flagImage: flag.usdFlag(),
    },
    {
      name: "British Pound",
      shortname: "GBP",
      rate: 4.9256,
      flagImage: flag.gbpFlag(),
    },
    {
      name: "Swiss Franc",
      shortname: "CHF",
      rate: 4.1702,
      flagImage: flag.chfFlag(),
    }
  ];

  return (
    <Container>
      <Header title="simple currency exchange" />
      <Form title="conventer" currencies={currencies} />
    </Container>
  );
}

export default App;
