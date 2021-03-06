import styled from "styled-components";
import MuiAlert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';

export const Note = withStyles({
    root: {
        fontWeight: "300",
        fontSize: "12px",
        textAlign: "right",
        fontStyle: "italic",
        padding: "0px 10px"     ,
    },
})(MuiAlert);

export const Result = styled.p`
    padding: 10px 20px;
    font-size: 22px;
    background-color: #00a2ff;
    color: hsl(208, 100%, 97%);
    border-radius: 5px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
`;

export const Value = styled.span`
    font-weight: 700;
    font-size: 30px;
    word-break: break-all;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #3f50b5;
    font-size: 12px;
    font-weight: 700;
    font-style: italic;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Date = styled.span`
    font-size: 15px;
    float: right;
    font-style: normal;
    font-weight: 700;
    margin: 10px;
`;
