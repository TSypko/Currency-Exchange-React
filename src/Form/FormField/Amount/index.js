import React from 'react';
import { Label, Input } from "./styled"

const Amount = ({ value, onChange }) => (
    <Label>
        Amount:
        <Input
            type="number"
            step="0.01"
            min="0"
            value={value}
            onChange={onChange}
        />
    </Label>
)

export default Amount;