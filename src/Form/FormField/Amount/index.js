import React from 'react';
import { StyledLabel, StyledInput } from "./styled";

const Amount = ({ value, onChange }) => {

    return (
        <>
            <StyledLabel>Amount</StyledLabel>
            <StyledInput
                variant="outlined"
                type="number"
                step="0.01"
                min="0"
                max="999999"
                autoFocus
                value={value}
                onChange={onChange}
                helperText="Please enter amount"
            />
        </>

    )
}

export default Amount;