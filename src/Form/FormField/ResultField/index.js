import React from 'react';
import { Result, Value, Note, Link, Date } from "./styled";

const ResultField = ({ result, LCID, currencyToName, amount, rateDate }) => {

    const resultString =
        amount
            ? result.toLocaleString(LCID, { style: 'currency', currency: currencyToName })
            : ""
        ;

    return (
        <>
            <Result>
                {!resultString && "Result"}
                <Value>
                    {resultString}
                </Value>
            </Result>
            <Note variant="outlined" severity="info">
                Exchange rates imported from
                {" "}
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