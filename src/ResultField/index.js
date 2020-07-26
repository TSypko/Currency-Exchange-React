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
                Exchange rates imported from <a
                    href="https://exchangeratesapi.io/"
                    className="resultField__link"
                    target="__blank" rel="noopener noreferrer">
                    https://exchangeratesapi.io
                </a> based on data published by the
                {" "}
                <a
                    href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
                    className="resultField__link"
                    target="__blank" rel="noopener noreferrer">
                    European Central Bank
                </a> from: <span className="resultField__date">{rateDate}</span>
            </p>
        </>
    )
};
export default ResultField;