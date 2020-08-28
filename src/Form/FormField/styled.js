import styled, { css } from "styled-components"

export const Field = styled.div`
    margin: 10px 0;
    text-align: center;

    @media (max-width: 420px) {
        margin: 0;
        text-align: center;
    }

    ${({ result }) => result && css`
        text-align: left;
    `}
`;