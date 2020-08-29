import React from 'react';
import {Create, SimpleForm, TextInput, required} from 'react-admin'


const CategoryCreate = (props) => (
    <Create title="Create a Category" {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
            <TextInput source="label" validate={required()} />
        </SimpleForm>
    </Create>
);

export default CategoryCreate