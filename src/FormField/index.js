import React from 'react';
import "./style.css";

const FormField = ({ formFieldType, body }) => (

    <div className={`formField${formFieldType ? ` formField--${formFieldType}` : ""}`}>
        {body}
    </div>
);

export default FormField;