import React from 'react';
import { countries } from '../utils/countries';
import "./style.css";

const CurrencySelector = ({ labelText, value, onChange }) => {

    const currencySelectorItems = countries.sort((a, b) => (a.name).localeCompare(b.name));

    return (

        <label className="currencySelector__label">
            {labelText}
            <select
                className="currencySelector__input"
                value={value}
                onChange={onChange}
            >
                {currencySelectorItems.map(currency =>
                    <option
                        className="currencySelector__item"
                        key={currency.shortname}>
                        {currency.name}
                    </option>)}
            </select>
        </label>
    );
}

export default CurrencySelector;