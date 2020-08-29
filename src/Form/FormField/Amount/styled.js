import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

export const StyledLabel = withStyles({
    root: {
        textTransform: 'uppercase',
        margin: "10px 10px",
        letterSpacing: "2px",
        fontSize: "20px",
        fontWeight: "400",
    },
})(InputLabel);

export const Input = withStyles({
    root: {
        width: "47%",
        textAlign: "right",
        outline: "none",
    },
})(TextField);

export const StyledInput = styled(Input)`
    .MuiOutlinedInput-notchedOutline {
        border-color: #00a2ff;
    }
`;
