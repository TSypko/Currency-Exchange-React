import React, { useState } from 'react';
import CurrencySelector from "../CurrencySelector"
import FormField from "../FormField"
import ResultField from "../ResultField"
import "./style.css";
import Amount from '../Amount';

const Form = ({ title, currencies, result, calculateResult }) => {

    const [currencyFromName, setCurrencyFrom] = useState("Polish Zloty");
    const onSelectCurrencyFromChange = ({ target }) => setCurrencyFrom(target.value);

    const [currencyToName, setCurrencyTo] = useState("Euro");
    const onSelectCurrencyToChange = ({ target }) => setCurrencyTo(target.value);

    const [amount, setAmount] = useState("");
    const onSetAmountChange = ({ target }) => setAmount(+target.value);


    const currencyFrom = currencies[currencies.findIndex(({ name }) => name === currencyFromName)];
    const currencyTo = currencies[currencies.findIndex(({ name }) => name === currencyToName)];

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form
            onSubmit={onFormSubmit}
            onChange={calculateResult(amount, currencyFrom.rate, currencyTo.rate, currencyTo.shortname)}
            className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    {title}
                </legend>
                <div className="form__fieldWrapper">
                    <FormField body={
                        <CurrencySelector
                            labelText={"From:"}
                            value={currencyFromName}
                            onChange={onSelectCurrencyFromChange}
                        />}
                    />
                    <div className="form__currencyInFlag">{currencyFrom.flagImage}</div>
                    <FormField body={
                        <CurrencySelector
                            labelText={"To:"}
                            value={currencyToName}
                            onChange={onSelectCurrencyToChange}
                        />}
                    />
                    <div className="form__currencyOutFlag">{currencyTo.flagImage}</div>
                    <FormField body={
                        <Amount
                            value={amount}
                            onChange={onSetAmountChange} />
                    }
                    />
                </div>
                <FormField
                    formFieldType={"formField--result"}
                    body={<ResultField result={result} />}
                />
            </fieldset>
        </form>
    )
}

export default Form;