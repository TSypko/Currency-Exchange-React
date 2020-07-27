import React, { useState, useEffect } from 'react';
import CurrencySelector from "../CurrencySelector"
import FormField from "../FormField"
import ResultField from "../ResultField"
import { currencies } from '../utils/currencies';
import Amount from '../Amount';
import "./style.css";

const Form = () => {

    const [importedCurrencies, setRates] = useState(currencies);

    useEffect(() => {
        let isActive = true;
        async function fetchData() {
            const response = await fetch('https://api.exchangeratesapi.io/latest?base=PLN');
            const rateData = await response.json();
            const ratesEntries = Object.entries(rateData.rates);
            if (isActive) {
                setRates(currencies.map(
                    (currency) => (
                        {
                            ...currency,
                            rate: ratesEntries.find(([rateName]) => rateName === (currency.shortname))[1]
                        }
                    )
                )
                )
            };

        };
        fetchData();
        return isActive = false
    }, []);

    const [currencyFromName, setCurrencyFromName] = useState("Polish Zloty");
    const onSelectCurrencyFromChange = ({ target }) => setCurrencyFromName(target.value);

    const [currencyToName, setCurrencyToName] = useState("Euro");
    const onSelectCurrencyToChange = ({ target }) => setCurrencyToName(target.value);

    const [amount, setAmount] = useState("");
    const onAmountChange = ({ target }) => setAmount(+target.value);

    const currencyFrom = importedCurrencies.find(({ name }) => name === currencyFromName);
    const currencyTo = importedCurrencies.find(({ name }) => name === currencyToName);

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    const result = (amount * currencyFrom.rate / currencyTo.rate).toFixed(2);

    return (
        <form
            onSubmit={onFormSubmit}
            className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    Conventer
                </legend>
                <div className="form__inputWrapper">
                    <FormField
                        body=
                        {
                            <CurrencySelector
                                labelText="From:"
                                value={currencyFromName}
                                onChange={onSelectCurrencyFromChange}
                            />
                        }
                    />
                    <div className="form__currencyInFlag">
                        <img
                            src={currencyFrom.flagImage}
                            alt={`Flag of ${currencyFrom.country}`}
                            className="form__flag" />
                    </div>
                    <FormField
                        body=
                        {
                            <CurrencySelector
                                labelText="To:"
                                value={currencyToName}
                                onChange={onSelectCurrencyToChange}
                            />
                        }
                    />
                    <div className="form__currencyOutFlag">
                        <img
                            src={currencyTo.flagImage}
                            alt={`Flag of ${currencyTo.country}`}
                            className="form__flag" />
                    </div>
                    <FormField
                        body=
                        {
                            <Amount
                                value={amount}
                                onChange={onAmountChange}
                            />
                        }
                    />
                </div>
                <FormField
                    formFieldType={"result"}
                    body=
                    {
                        <ResultField
                            result={result}
                            currencyToName={currencyTo.shortname}
                            amount={amount}
                        />
                    }
                />
            </fieldset>
        </form>
    )
}

export default Form;