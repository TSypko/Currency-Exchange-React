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

    const dateString = date.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })
    const timeString = date.toLocaleTimeString();

    return (
        <div className="clock">
            <p className="clock__paragraph">
                Dzisiaj jest {dateString}, {timeString}
            </p>
        </div>
    );
}

export default Clock;