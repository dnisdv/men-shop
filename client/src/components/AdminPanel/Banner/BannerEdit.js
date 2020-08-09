import React from 'react';
import {Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, ImageField} from 'react-admin'


export default(props) => {

    return(
        <Edit title="Edit Banner" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput label={'Image Url'} fullWidth source="image" />
            <ImageField source="image" title="title" />
            <ReferenceInput source="category" allowEmpty reference="api/category" >
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
    )

}
