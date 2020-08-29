import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import styled from "styled-components";

export const Select = styled(TextField)`
    .MuiOutlinedInput-notchedOutline {
        border-color: #00a2ff;
        font-size: "18px";
    }
`;

export const StyledMenuItem = withStyles({
    root: {
        textTransform: 'uppercase',
        margin: "5px 10px",
        fontSize: "14px",
    },
})(MenuItem);

