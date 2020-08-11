import React from 'react';
import './style.css'
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
        <div className="clock">
            Today is {formatDate(date)}
        </div>
    );
}

export default Clock;