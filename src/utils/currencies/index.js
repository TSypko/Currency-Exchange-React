import plnFlagImage from '../flags/Polish Zloty.svg'
import euroFlagImage from '../flags/Euro.svg'
import usdFlagImage from '../flags/US Dollar.svg'
import gbpFlagImage from '../flags/British Pound.svg'
import chfFlagImage from '../flags/Swiss Franc.svg'
import dkkFlagImage from '../flags/Danish krone.svg'
import norFlagImage from '../flags/Norwegian krone.svg'
import sweFlagImage from '../flags/Swedish krona.svg'
import rusFlagImage from '../flags/Russian rouble.svg'
import ukrFlagImage from '../flags/Ukrainian hryvnia.svg'
import czkFlagImage from '../flags/Czech koruna.svg'
import jpyFlagImage from '../flags/Japanese Yen.svg'
import hrkFlagImage from '../flags/Croatian Kuna.svg'

export const rateDate = "2020-07-19";

export const currencies = [
  {
    name: "Polish Zloty",
    shortname: "PLN",
    rate: 1,
    flagImage: plnFlagImage,
    country: "Poland",
  },
  {
    name: "Euro",
    shortname: "EUR",
    rate: 4.4827,
    flagImage: euroFlagImage,
    country: "European Union",
  },
  {
    name: "US Dollar",
    shortname: "USD",
    rate: 3.9263,
    flagImage: usdFlagImage,
    country: "United States of America",
  },
  {
    name: "British Pound",
    shortname: "GBP",
    rate: 4.9331,
    flagImage: gbpFlagImage,
    country: "Great Britain",
  },
  {
    name: "Swiss Franc",
    shortname: "CHF",
    rate: 4.1647,
    flagImage: chfFlagImage,
    country: "Switzerland",
  },
  {
    name: "Danish krone",
    shortname: "DKK",
    rate: 0.6021,
    flagImage: dkkFlagImage,
    country: "Denmark",
  },
  {
    name: "Norwegian krone",
    shortname: "NOK",
    rate: 0.4230,
    flagImage: norFlagImage,
    country: "Norway",
  },
  {
    name: "Swedish krona",
    shortname: "SEK",
    rate: 0.4338,
    flagImage: sweFlagImage,
    country: "Sweden",
  },
  {
    name: "Russian rouble",
    shortname: "RUB",
    rate: 0.0546,
    flagImage: rusFlagImage,
    country: "Russia",
  },
  {
    name: "Ukrainian hryvnia",
    shortname: "UAH",
    rate: 0.1435,
    flagImage: ukrFlagImage,
    country: "Ukraine",
  },
  {
    name: "Czech koruna",
    shortname: "CZK",
    rate: 0.1678,
    flagImage: czkFlagImage,
    country: "Czechia",
  },
  {
    name: "Japanese Yen",
    shortname: "JPY",
    rate: 3.6002 / 100,
    flagImage: jpyFlagImage,
    country: "Japan",
  },
  {
    name: "Croatian Kuna",
    shortname: "HRK",
    rate: 0.5904,
    flagImage: hrkFlagImage,
    country: "Croatia",
  },
];
