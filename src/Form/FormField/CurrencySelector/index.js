import React from 'react';
import { countries } from '../../../utils/countries';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import styled from "styled-components";

const CurrencySelector = ({ labelText, value, onChange }) => {


    const Select = withStyles({
        root: {
            fontSize: "18px",
        },
    })(TextField);

    const StyledMenuItem = withStyles({
        root: {
            textTransform: 'uppercase',
            margin: "5px 10px",
            fontSize: "14px",
        },
    })(MenuItem);

    const StyledSelect = styled(Select)`
        .MuiOutlinedInput-notchedOutline {
            border-color: #00a2ff;
        }
    `;

    const currencySelectorItems = countries.sort((a, b) => (a.name).localeCompare(b.name));

    return (
        <>
            <StyledSelect
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
                    </StyledMenuItem>)}
            </StyledSelect>
        </>
    );
}

export default CurrencySelector;