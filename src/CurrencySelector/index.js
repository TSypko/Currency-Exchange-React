import React from 'react';
import { currencies } from '../utils/currencies';
import "./style.css";

const CurrencySelector = ({ labelText, value, onChange }) => (

    <label className="currencySelector__label">
        {labelText}
        <select
            className="currencySelector__input"
            value={value}
            onChange={onChange}
        >
            {currencies.map(currency =>
                <option
                    className="currencySelector__item"
                    key={currency.shortname}>
                    {currency.name}
                </option>)}

        </select>
    </label>
);

export default CurrencySelector;