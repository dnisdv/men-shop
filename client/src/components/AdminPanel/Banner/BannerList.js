import React from 'react';
import {List, Datagrid, TextField, DateField, EditButton, ReferenceField} from 'react-admin'

export default(props) => {
    return(
    <List title="Banner List" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField allowEmpty source="category" reference="api/category">
                <TextField source="title" />
            </ReferenceField>    
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton basePath="banner" />
        </Datagrid>
    </List>
    )
}