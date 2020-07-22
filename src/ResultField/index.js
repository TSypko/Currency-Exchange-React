import React from 'react';
import { rateDate } from '../utils/currencies';
import "./style.css";

const ResultField = ({ result, currencyToName, amount }) => {
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
                <strong>IMPORTANT!</strong> exchange rates according to National Bank of Poland from {rateDate}
            </p>
        </>
    )
};
export default ResultField;