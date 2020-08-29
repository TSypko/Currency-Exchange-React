import React from 'react';
import { countries } from '../../../utils/countries';
import { StyledMenuItem, Select } from "./styled.js"

const CurrencySelector = ({ labelText, value, onChange }) => {

    const currencySelectorItems = countries.sort((a, b) => (a.name).localeCompare(b.name));

    return (
        <>
            <Select
                variant="outlined"
                label={labelText}
                value={value}
                onChange={onChange}
                select
                helperText="Please select currency"
            >
                {currencySelectorItems.map(currency =>
                    <StyledMenuItem
                        key={currency.shortname}
                        value={currency.name}
                    >
                        {currency.name}
                    </StyledMenuItem>
                    )};
            </Select>
        </>
    );
}

export default CurrencySelector;