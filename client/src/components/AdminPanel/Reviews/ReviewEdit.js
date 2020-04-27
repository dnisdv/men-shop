import React from 'react';
import {Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, TextField, required} from 'react-admin'

import RichTextInput from 'ra-input-rich-text';



export default(props) => (
    <Edit title="Post Edit" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="user" reference="api/users" validate={required()}>
                <SelectInput optionText="username" />
            </ReferenceInput>
            <TextInput fullWidth source="title" />
            <RichTextInput multiline toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} source="description" />
            <SelectInput label='Rate' emptyValue={0} defaultValue={0} source="rate" choices={[
                    { id: "0", name: "0", rate: 0 },
                    { id: "1", name: "1", rate: 1 },
                    { id: '2', name: '2', rate: 2 },
                    { id: '3', name: '3', rate: 3 },
                    { id: '4', name: '4', rate: 4 },
                    { id: '5', name: '5', rate: 5 },
            ]} optionValue="rate" />

            <ReferenceInput source="product" reference="api/products" validate={required()}>
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);