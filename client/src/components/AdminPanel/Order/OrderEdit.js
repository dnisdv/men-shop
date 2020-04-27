import React from 'react';
import {Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, required} from 'react-admin'


export default (props) => (
    <Edit title="Order Edit" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="user" reference="api/users" validate={required()}>
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ReferenceInput source="product" reference="api/products" validate={required()}>
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);