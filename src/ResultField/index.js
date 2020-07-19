import React from 'react';
import "./style.css";

const ResultField = ({ result }) => (
    <>
        <p className="resultField__result">Result: <span className="resultField__result--value">{result}</span></p>
        <p className="resultField__note">
            <strong>IMPORTANT!</strong> exchange rates according to National Bank of Poland from 2020-07-19
    </p>
    </>
);
export default ResultField;