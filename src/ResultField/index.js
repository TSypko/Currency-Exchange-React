import React, { useState, useEffect } from 'react';
import "./style.css";

const ResultField = ({ result, currencyToName, amount }) => {

    const [rateDate, setRateDate] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.exchangeratesapi.io/latest');
            const rateData = await response.json();
            setRateDate(rateData.date);
        }
        fetchData()
    }, []);

    const resultString =
        amount
            ? `${result} ${currencyToName}`
            : ""
        ;

    return (
        <>
            <p className="resultField__result">
                Result:
                <span className="resultField__result--value">
                    {resultString}
                </span>
            </p>
            <p className="resultField__note">
                <strong>IMPORTANT!</strong> exchange rates relates to data published by the European Central Bank from {rateDate}
            </p>
        </>
    )
};
export default ResultField;