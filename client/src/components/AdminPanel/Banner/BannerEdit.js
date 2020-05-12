import React from 'react';
import {Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, ImageField, required} from 'react-admin'


export default(props) => {

    const isRequired = false
    return(
        <Edit title="Edit Banner" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput label={'Image Url'} fullWidth source="image" />
            <ImageField source="image" title="title" />
            <ReferenceInput source="category" reference="api/category" validate={isRequired}>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
    )

}
