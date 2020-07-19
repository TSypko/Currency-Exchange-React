import React from 'react';
import "./style.css";

const Form = ({ title }) => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">
                {title}
                </legend>
            <div className="form__fieldWrapper">
                <div className="form__field">

                    <label htmlFor="inputCurrencyInType" className="form__label">From:</label>
                    <select name="inputCurrencyInType" id="inputCurrencyInType"
                        className="form__input form__input--select">
                        <option className="form__item" value="pln">Polish Zloty</option>
                        <option className="form__item" value="eur">Euro</option>
                        <option className="form__item" value="usd">US Dollar</option>
                        <option className="form__item" value="gbp">British Pound</option>
                        <option className="form__item" value="chf">Swiss Franc</option>
                    </select>
                </div>
                <div className="form__currencyInFlag"></div>
                <div className="form__field">

                    <label htmlFor="outputCurrencyType" className="form__label">To:</label>
                    <select name="outputCurrencyType" id="outputCurrencyType"
                        className="form__input form__input--select">
                        <option className="form__item" value="pln">Polish Zloty</option>
                        <option className="form__item" value="eur">Euro</option>
                        <option className="form__item" value="usd">US Dollar</option>
                        <option className="form__item" value="gbp">British Pound</option>
                        <option className="form__item" value="chf">Swiss Franc</option>
                    </select>
                </div>
                <div className="form__currencyOutFlag"></div>


                <div className="form__field ">
                    <label htmlFor="amount" className="form__label">Amount:</label>
                    <input id="amount" type="number" step="0.01"
                        className="form__input form__input--amount" name="amountIn" />

                </div>
            </div>
            <div className="form__field form__field--result">
                <p className="form__result">Result: <span className="form__result--value"></span></p>
                <p className="form__note"><strong>IMPORTANT!</strong> exchange rates according to National Bank of
                        Poland from 2020-06-24</p>
            </div>

        </fieldset>
    </form>

)

export default Form;