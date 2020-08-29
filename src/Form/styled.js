import styled, { css } from "styled-components"

export const FormContainer = styled.form`
    background-color: white;
    padding: 10px 15px;
`;

export const Fieldset = styled.fieldset`
    border-radius: 5px;
    border: 2px solid #00a2ff;
`;

export const Legend = styled.legend`
    padding: 10px 15px;
    border-radius: 5px;
    border: 2px solid #00a2ff;
    font-weight: 700;
    text-align: right;
    text-transform: uppercase;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FlagWrapper = styled.div`
    text-align: center;
    margin: 15px 0px;
`;

export const FlagImage = styled.img`
    height: 50px;
    border: 1px solid black;
`;

export const FetchMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    padding: 10px;
    width: 100%;
    
    ${({ error }) => error && css`
            color: red;
    `}
`;