import React from 'react';
import { countries } from '../utils/countries';
import { Label, Select, Option } from "./styled"

const CurrencySelector = ({ labelText, value, onChange }) => {

    const currencySelectorItems = countries.sort((a, b) => (a.name).localeCompare(b.name));

    return (

        <Label>
            {labelText}
            <Select
                value={value}
                onChange={onChange}
            >
                {currencySelectorItems.map(currency =>
                    <Option
                        key={currency.shortname}>
                        {currency.name}
                    </Option>)}
            </Select>
        </Label>
    );
}

export default CurrencySelector;