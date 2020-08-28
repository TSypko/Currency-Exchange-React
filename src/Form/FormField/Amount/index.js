import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const Amount = ({ value, onChange }) => {

    const StyledLabel = withStyles({
        root: {
            textTransform: 'uppercase',
            margin: "10px 10px",
            color: "black",
            fontWeight: "700",
        },
    })(InputLabel);

    const StyledInput = withStyles({
        root: {
            width: "max-content",
            textAlign: "right",
            outline: "none",
        },
    })(TextField);

    return (
        <>
            <StyledLabel>Amount</StyledLabel>
            <StyledInput
                type="number"
                step="0.01"
                min="0"
                max="999999"
                placeholder="enter amount"
                autoFocus
                value={value}
                onChange={onChange}
            />
        </>

    )
}

export default Amount;