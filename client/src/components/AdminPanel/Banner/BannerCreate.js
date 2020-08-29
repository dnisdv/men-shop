import React from 'react';
import {Create, SimpleForm, TextInput, ReferenceInput, SelectInput} from 'react-admin'


export default(props) => {
    return(
        <Create title="Create a Banner" {...props}>
        <SimpleForm>
            <TextInput label={'Image Url'} fullWidth source="image" />
            <ReferenceInput source="category" reference="api/category" >
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
    )

}
