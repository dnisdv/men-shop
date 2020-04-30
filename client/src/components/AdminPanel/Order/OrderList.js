import React from 'react';
import {List, Datagrid, TextField, DateField, EditButton, ReferenceField} from 'react-admin'

export default (props) => {
    return(
    <List title="User List" {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField allowEmpty source="user" reference="api/users">
                <TextField source="username" />
            </ReferenceField>            
            <ReferenceField allowEmpty source="product" reference="api/products">
                <TextField source="title" />
            </ReferenceField>    
            <ReferenceField allowEmpty source="price" reference="api/products">
                <TextField source="price" />
            </ReferenceField>    
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
        </Datagrid>
    </List>
    )
}