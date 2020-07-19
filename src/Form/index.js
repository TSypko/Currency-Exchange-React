import React, { useState } from 'react';
import CurrencySelector from "../CurrencySelector"
import FormField from "../FormField"
import "./style.css";

const Form = ({ title, currencies }) => {

    const [currencyFromName, setCurrencyFrom] = useState("Polish Zloty");
    const onSelectCurrencyFromChange = ({ target }) => setCurrencyFrom(target.value);

    const [currencyToName, setCurrencyTo] = useState("Euro");
    const onSelectCurrencyToChange = ({ target }) => setCurrencyTo(target.value);

    const [amount, setAmount] = useState("");
    const onSetAmountChange = ({ target }) => setAmount(+target.value);

    const currencyFrom = currencies[currencies.findIndex(({ name }) => name === currencyFromName)];
    const currencyTo = currencies[currencies.findIndex(({ name }) => name === currencyToName)];

    const result =
        amount
            ? `${(amount * currencyFrom.rate / currencyTo.rate).toFixed(2)} ${currencyTo.shortname}`
            : "";

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onFormSubmit} className="form">
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
                        <label className="formField__label"
                        >Amount:
                        <input
                                id="amount"
                                type="number"
                                step="0.01"
                                className="formField__input formField__input--amount"
                                name="amountIn"
                                value={amount}
                                onChange={onSetAmountChange}
                            />
                        </label>
                    }
                    />
                </div>
                <FormField formFieldType={"formField--result"} body={
                    <>
                        <p className="form__result">Result: <span className="form__result--value">{result}</span></p>
                        <p className="form__note"><strong>IMPORTANT!</strong> exchange rates according to National Bank of
                        Poland from 2020-07-19</p>
                    </>
                }

                />

            </fieldset>
        </form>
    )
}

export default Form;