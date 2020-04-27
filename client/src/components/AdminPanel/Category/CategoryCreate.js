import React from 'react';
import {Create, SimpleForm, TextInput, ReferenceInput, SelectInput, required} from 'react-admin'

import RichTextInput from 'ra-input-rich-text';

export default(props) => (
    <Create title="Create a Category" {...props}>
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);