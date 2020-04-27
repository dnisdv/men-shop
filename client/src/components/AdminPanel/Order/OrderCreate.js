import React from 'react';
import {Create, SimpleForm, ReferenceInput, SelectInput, required} from 'react-admin'

export default(props) => (
    <Create title="Create a Order" {...props}>
        <SimpleForm>
            <ReferenceInput source="user" reference="api/users" validate={required()}>
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ReferenceInput source="product" reference="api/products" validate={required()}>
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);