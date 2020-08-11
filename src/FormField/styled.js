import styled, { css } from "styled-components"

export const Field = styled.div`
    margin: 20px 0;
    text-align: right;

    @media (max-width: 420px) {
        text-align: center;
    }

    ${({ result }) => result && css`
        text-align: left;
    `}
`;