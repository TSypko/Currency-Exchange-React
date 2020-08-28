import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import styled from "styled-components";

const StyledLabel = withStyles({
    root: {
        textTransform: 'uppercase',
        margin: "10px 10px",
        letterSpacing: "2px",
        fontSize: "20px",
        fontWeight: "400",
    },
})(InputLabel);

const Input = withStyles({
    root: {
        width: "47%",
        textAlign: "right",
        outline: "none",
    },
})(TextField);

const StyledInput = styled(Input)`
    .MuiOutlinedInput-notchedOutline {
        border-color: #00a2ff;
    }
`;

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