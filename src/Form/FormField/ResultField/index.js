import React from 'react';
import { Result, Value, Note, Link, Date } from "./styled"

const ResultField = ({ result, currencyToName, amount, rateDate }) => {

    const resultString =
        amount
            ? `${result.toFixed(2)} ${currencyToName}`
            : ""
        ;

    return (
        <>
            <Result>
                Result:
                <Value>
                    {resultString}
                </Value>
            </Result>
            <Note>
                Exchange rates imported from
                <Link
                    href="https://exchangeratesapi.io/"
                    target="__blank" rel="noopener noreferrer">
                    https://exchangeratesapi.io
                </Link> based on data published by the
                {" "}
                <Link
                    href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
                    target="__blank" rel="noopener noreferrer">
                    European Central Bank
                </Link>
                {" "}
                from:
                <Date>
                    {rateDate}
                </Date>
            </Note>
        </>
    )
};

export default ResultField;