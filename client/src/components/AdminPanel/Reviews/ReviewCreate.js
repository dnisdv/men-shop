import React from 'react';
import {Create, SimpleForm, TextInput, ReferenceInput, SelectInput} from 'react-admin'

import RichTextInput from 'ra-input-rich-text';

export default(props) => (
    <Create title="Create a Review" {...props}>
        <SimpleForm>
            <ReferenceInput source="user" reference="api/users">
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

            <ReferenceInput source="product" reference="api/products" >
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);