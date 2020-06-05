import React from 'react';
import {Create, SimpleForm, TextInput, ReferenceInput, SelectInput, required} from 'react-admin'

import RichTextInput from 'ra-input-rich-text';

const orderStatusCreate = (props) => (
    <Create title="Create a Status" {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
            <TextInput source="label" validate={required()} />
        </SimpleForm>
    </Create>
);

export default orderStatusCreate