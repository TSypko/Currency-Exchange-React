import React, { useState } from 'react';
import CurrencySelector from "../CurrencySelector"
import FormField from "../FormField"
import ResultField from "../ResultField"
import { currencies } from '../utils/currencies';
import Amount from '../Amount';
import "./style.css";

const Form = ({ result, calculateResult }) => {

    const [currencyFromName, setCurrencyFromNae] = useState("Polish Zloty");
    const onSelectCurrencyFromChange = ({ target }) => setCurrencyFromNae(target.value);

    const [currencyToName, setCurrencyToName] = useState("Euro");
    const onSelectCurrencyToChange = ({ target }) => setCurrencyToName(target.value);

    const [amount, setAmount] = useState();
    const onAmountChange = ({ target }) => setAmount(+target.value);

    const currencyFrom = currencies.find(({ name }) => name === currencyFromName);
    const currencyTo = currencies.find(({ name }) => name === currencyToName);

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form
            onSubmit={onFormSubmit}
            onChange={calculateResult(amount, currencyFrom.rate, currencyTo.rate)}
            className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    Conventer
                </legend>
                <div className="form__inputWrapper">
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
                            onChange={onAmountChange} 
                            />
                    }
                    />
                </div>
                <FormField
                    formFieldType={"formField--result"}
                    body={
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