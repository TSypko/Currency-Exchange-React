import React, { useState, useEffect } from 'react';
import './style.css'

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const dateString = date.toLocaleDateString("en-EN", { weekday: "long", day: "numeric", month: "long" })
    const timeString = date.toLocaleTimeString(undefined);

    return (
        <div className="clock">
                Today is {dateString}, {timeString}
        </div>
    );
}

export default Clock;