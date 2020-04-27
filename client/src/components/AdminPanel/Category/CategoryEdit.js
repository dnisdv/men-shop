import React from 'react';
import {Edit, SimpleForm, TextInput, required} from 'react-admin'


export default(props) => (
    <Edit title="Post Edit" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" validate={required()} />
        </SimpleForm>
    </Edit>
);