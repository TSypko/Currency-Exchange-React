import React from 'react';
import Container from './Container';
import Header from './Header';
import Form from './Form';

function App() {

  const currencies = [
    {
      name: "Polish Zloty",
      rate: 1,
      flagLink: `images/Flag_of_Poland_2.svg"  alt="Flag of Poland"`
    },
    {
      name: "Euro",
      rate: 4.4532,
      flagLink: `images/Flag_of_euro.svg"  alt="Flag of Euro"`
    },
    {
      name: "US Dollar",
      rate: 3.9395,
      flagLink: `images/US_44_Star_Flag.svg"  alt="Flag of US"`
    },
    {
      name: "British Pound",
      rate: 4.9256,
      flagLink: `images/Flag_of_the_United_Kingdom.svg"  alt="Flag of GB"`
    },
    {
      name: "Swiss Franc",
      rate: 4.1702,
      flagLink: `images/Flag_of_Switzerland.svg"  alt="Flag of Swiss"`
    },
  ];

  return (
    <Container>
      <Header title="simple currency exchange" />
      <Form title="conventer" currencies={currencies} />
    </Container>
  );
}

export default App;
