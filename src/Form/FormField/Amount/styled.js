import styled from "styled-components"

export const Label = styled.label`
    margin-right: 5px;
    margin-left: 10px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
`;
export const Input = styled.input`
    margin: 10px;
    width: 180px;
    padding: 15px 10px;
    font-size: 20px;
    border: 1px solid #00a2ff;
    border-radius: 5px;

    @media (max-width: 320px) {
        max-width: 150px;
    }
`;
