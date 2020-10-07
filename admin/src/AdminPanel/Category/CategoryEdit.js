import React from 'react';
import {Edit, SimpleForm, TextInput, required} from 'react-admin'


const CategoryEdit = (props) => (
    <Edit title="Category Edit" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" validate={required()} />
            <TextInput source="label" validate={required()}/>
        </SimpleForm>
    </Edit>
);

export default CategoryEdit