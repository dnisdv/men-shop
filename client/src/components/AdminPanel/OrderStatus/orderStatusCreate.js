import React from 'react';
import {Create, SimpleForm, TextInput,required} from 'react-admin'


const orderStatusCreate = (props) => (
    <Create title="Create a Status" {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
            <TextInput source="label" validate={required()} />
        </SimpleForm>
    </Create>
);

export default orderStatusCreate