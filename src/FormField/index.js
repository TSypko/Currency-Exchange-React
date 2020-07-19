import React from 'react';
import "./style.css";

const FormField = ({ formFieldType, body }) => (

    <div className={`formField${formFieldType ? ` ${formFieldType}` : ""}`}>
        {body}
    </div>
);

export default FormField;