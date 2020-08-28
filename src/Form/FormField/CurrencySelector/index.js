import React from 'react';
import { countries } from '../../../utils/countries';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const CurrencySelector = ({ labelText, value, onChange }) => {


    const StyledLabel = withStyles({
        root: {
            textTransform: 'uppercase',
            margin: "5px 10px",
            color: "black",
            fontWeight: "700",
        },
    })(InputLabel);

    const StyledSelect = withStyles({
        root: {
            padding: "10px 10px",
            fontSize: "18px",
        },
    })(Select);

    const StyledMenuItem = withStyles({
        root: {
            textTransform: 'uppercase',
            margin: "5px 10px",
            fontSize: "16px",
        },
    })(MenuItem);

    const currencySelectorItems = countries.sort((a, b) => (a.name).localeCompare(b.name));

    return (
        <>
            <StyledLabel for={labelText}>{labelText}</StyledLabel>
            <StyledSelect
                id={labelText}
                value={value}
                onChange={onChange}

            >
                {currencySelectorItems.map(currency =>
                    <StyledMenuItem
                        key={currency.shortname}
                        value={currency.name}
                    >
                        {currency.name}
                    </StyledMenuItem>)}
            </StyledSelect>
        </>
    );
}

export default CurrencySelector;