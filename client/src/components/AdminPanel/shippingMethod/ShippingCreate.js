import React from 'react';
import {Create, SimpleForm, TextInput,NumberInput, required} from 'react-admin'


const CategoryCreate = (props) => (
    <Create title="Create a Category" {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
            <NumberInput source="price" validate={required()} />
        </SimpleForm>
    </Create>
);

export default CategoryCreate