import React from 'react';
import { ClockContainer } from "./styled"
import { useCurrentDate } from './useCurrentDate';

const Clock = () => {

    const date = useCurrentDate();

    const formatDate = (date) => {
        const dateString = date.toLocaleDateString(
            "en-EN", {
            weekday: "long",
            day: "numeric",
            month: "long"
        });
        const timeString = date.toLocaleTimeString();
        return `${dateString}, ${timeString}`
    }

    return (
        <ClockContainer>
            Today is {formatDate(date)}
        </ClockContainer>
    );
}

export default Clock;