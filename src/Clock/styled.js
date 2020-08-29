import styled from "styled-components"
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export const ClockContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    background-color: white;
    margin: 0;
    font-size: 13px;
    font-family: "Roboto Condensed";
    letter-spacing: 1px;
`;

export const Icon = styled(AccessTimeIcon)`
    margin: 0 5px;
`;