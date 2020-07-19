import React from 'react';
import "./style.css";

const Amount = ({ value, onChange }) => (
    <label className="amount__label"
    >Amount:
        <input
            type="number"
            step="0.01"
            className="amount__input"
            value={value}
            onChange={onChange}
        />
    </label>
)

export default Amount;