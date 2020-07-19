import React, { useState } from 'react';
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

    let result;
    if (amount === "") { result = "" }
    else result = `
        ${(amount * currencyFrom.rate * (1 / currencyTo.rate)).toFixed(2)} ${currencyTo.shortname}
        `;

    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    {title}
                </legend>
                <div className="form__fieldWrapper">
                    <div className="form__field">
                        <label htmlFor="inputCurrencyInType" className="form__label">From:</label>
                        <select
                            name="inputCurrencyInType"
                            id="inputCurrencyInType"
                            className="form__input form__input--select"
                            value={currencyFromName}
                            onChange={onSelectCurrencyFromChange}
                        >
                            <option className="form__item">Polish Zloty</option>
                            <option className="form__item">Euro</option>
                            <option className="form__item">US Dollar</option>
                            <option className="form__item">British Pound</option>
                            <option className="form__item">Swiss Franc</option>
                        </select>
                    </div>
                    <div className="form__currencyInFlag">{currencyFrom.flagImage}</div>
                    <div className="form__field">
                        <label htmlFor="outputCurrencyType" className="form__label">To:</label>
                        <select
                            name="outputCurrencyType"
                            id="outputCurrencyType"
                            className="form__input form__input--select"
                            value={currencyToName}
                            onChange={onSelectCurrencyToChange}
                        >
                            <option className="form__item">Polish Zloty</option>
                            <option className="form__item">Euro</option>
                            <option className="form__item">US Dollar</option>
                            <option className="form__item">British Pound</option>
                            <option className="form__item">Swiss Franc</option>
                        </select>
                    </div>
                    <div className="form__currencyOutFlag">{currencyTo.flagImage}</div>
                    <div className="form__field ">
                        <label htmlFor="amount" className="form__label"
                        >Amount:</label>
                        <input
                            id="amount"
                            type="number"
                            step="0.01"
                            className="form__input form__input--amount"
                            name="amountIn"
                            value={amount}
                            onChange={onSetAmountChange}
                        />
                    </div>
                </div>
                <div className="form__field form__field--result">
                    <p className="form__result">Result: <span className="form__result--value">{result}</span></p>
                    <p className="form__note"><strong>IMPORTANT!</strong> exchange rates according to National Bank of
                        Poland from 2020-06-24</p>
                </div>
            </fieldset>
        </form>
    )
}

export default Form;