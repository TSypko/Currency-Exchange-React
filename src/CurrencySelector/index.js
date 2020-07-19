import React from 'react';
import "./style.css";

const CurrencySelector = ({ labelText, value, onChange }) => (

    <label className="currencySelector__label">
        {labelText}
        <select
            className="currencySelector__input"
            value={value}
            onChange={onChange}
        >
            <option className="currencySelector__item">Polish Zloty</option>
            <option className="currencySelector__item">Euro</option>
            <option className="currencySelector__item">US Dollar</option>
            <option className="currencySelector__item">British Pound</option>
            <option className="currencySelector__item">Swiss Franc</option>
            <option className="currencySelector__item">Danish krone</option>
            <option className="currencySelector__item">Norwegian krone</option>
            <option className="currencySelector__item">Swedish krona</option>
            <option className="currencySelector__item">Russian rouble</option>
            <option className="currencySelector__item">Ukrainian hryvnia</option>
            <option className="currencySelector__item">Czech koruna</option>
        </select>
    </label>
);

export default CurrencySelector;