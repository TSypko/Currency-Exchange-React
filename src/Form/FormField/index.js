import React from 'react';
import { Field } from "./styled"

const FormField = ({ formFieldType, body }) => (

    <Field result={formFieldType === "result"}>
        {body}
    </Field>
);

export default FormField;