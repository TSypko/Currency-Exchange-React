import styled from "styled-components";

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

export const Note = styled.p`
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
    text-align: right;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #005383;
    font-size: 14px;
    font-weight: 400;
    font-style: italic;

    &:hover {
        color: #005383bd;
    }

    &:active {
        color: #005383;
    }
`;

export const Date = styled.span`
    font-size: 15px;
    float: right;
    font-style: normal;
    font-weight: 700;
    margin: 10px;
`;
