import React from 'react';
import { Field } from "./styled"

const FormField = ({ type, body }) => (

    <Field result={type} >
        {body}
    </Field>
);

export default FormField;