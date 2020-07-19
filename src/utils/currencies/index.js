import * as flag from '../flags';

export const currencies = [
    {
      name: "Polish Zloty",
      shortname: "PLN",
      rate: 1,
      flagImage: flag.plnFlag(),
    },
    {
      name: "Euro",
      shortname: "EUR",
      rate: 4.4827,
      flagImage: flag.euroFlag(),
    },
    {
      name: "US Dollar",
      shortname: "USD",
      rate: 3.9263,
      flagImage: flag.usdFlag(),
    },
    {
      name: "British Pound",
      shortname: "GBP",
      rate: 4.9331,
      flagImage: flag.gbpFlag(),
    },
    {
      name: "Swiss Franc",
      shortname: "CHF",
      rate: 4.1647,
      flagImage: flag.chfFlag(),
    },
    {
      name: "Danish krone",
      shortname: "DKK",
      rate: 0.6021,
      flagImage: flag.dkkFlag(),
    },
    {
      name: "Norwegian krone",
      shortname: "NOK",
      rate: 0.4230,
      flagImage: flag.norFlag(),
    },
    {
      name: "Swedish krona",
      shortname: "SEK",
      rate: 0.4338,
      flagImage: flag.sweFlag(),
    },
    {
      name: "Russian rouble",
      shortname: "RUB",
      rate: 0.0546,
      flagImage: flag.rusFlag(),
    },
    {
      name: "Ukrainian hryvnia",
      shortname: "UAH",
      rate: 0.1435,
      flagImage: flag.ukrFlag(),
    },
    {
      name: "Czech koruna",
      shortname: "CZK",
      rate: 0.1678,
      flagImage: flag.czkFlag(),
    }
  ];
