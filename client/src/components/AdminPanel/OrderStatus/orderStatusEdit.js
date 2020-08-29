import React from 'react';
import {Edit, SimpleForm, TextInput, required} from 'react-admin'


const orderStatusEdit = (props) => (
    <Edit title="Status Edit" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" validate={required()} />
            <TextInput source="label" validate={required()}/>
        </SimpleForm>
    </Edit>
);

export default orderStatusEdit