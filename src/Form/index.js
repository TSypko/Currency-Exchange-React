import React, { useState, useEffect } from 'react';
import CurrencySelector from "./FormField/CurrencySelector"
import FormField from "./FormField"
import ResultField from "./FormField/ResultField"
import { countries } from '../utils/countries';
import Amount from './FormField/Amount';
import { FormContainer, Fieldset, Legend, InputWrapper, FlagWrapper, FlagImage } from "./styled"

const Form = () => {

    const [currencies, setCurrencies] = useState(countries);
    const [rateDate, setRateDate] = useState("");

    useEffect(() => {
        let isActive = true;
        async function fetchData() {
            const response = await fetch('https://api.exchangeratesapi.io/latest?base=PLN');
            const rateData = await response.json();
            const ratesEntries = Object.entries(rateData.rates);
            if (isActive) {
                setCurrencies(countries.map(
                    (currency) => (
                        {
                            ...currency,
                            rate: ratesEntries.find(([rateName]) => rateName === (currency.shortname))[1]
                        }
                    )
                )
                );
                setRateDate(rateData.date);
            };

        };
        fetchData();
        return () => { isActive = false };
    }, []);

    const [currencyFromName, setCurrencyFromName] = useState("Polish Zloty");
    const onSelectCurrencyFromChange = ({ target }) => setCurrencyFromName(target.value);

    const [currencyToName, setCurrencyToName] = useState("Euro");
    const onSelectCurrencyToChange = ({ target }) => setCurrencyToName(target.value);

    const [amount, setAmount] = useState("");
    const onAmountChange = ({ target }) => setAmount(+target.value);

    const currencyFrom = currencies.find(({ name }) => name === currencyFromName);
    const currencyTo = currencies.find(({ name }) => name === currencyToName);

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    const result = (amount * currencyTo.rate / currencyFrom.rate).toFixed(2);

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>
                    Converter
                </Legend>
                <InputWrapper>
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
                    <FlagWrapper>
                        <FlagImage
                            src={currencyFrom.flagImage}
                            alt={`Flag of ${currencyFrom.country}`}
                        />
                    </FlagWrapper>
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
                    <FlagWrapper>
                        <FlagImage
                            src={currencyTo.flagImage}
                            alt={`Flag of ${currencyTo.country}`}
                        />
                    </FlagWrapper>
                    <FormField
                        body=
                        {
                            <Amount
                                value={amount}
                                onChange={onAmountChange}
                            />
                        }
                    />
                </InputWrapper>
                <FormField
                    type={"result"}
                    body=
                    {
                        <ResultField
                            result={result}
                            currencyToName={currencyTo.shortname}
                            amount={amount}
                            rateDate={rateDate}
                        />
                    }
                />
            </Fieldset>
        </FormContainer>
    )
}

export default Form;