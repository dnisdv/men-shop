import React from 'react';
import {List, Datagrid, TextField, DateField, EditButton, ReferenceField} from 'react-admin'

export default (props) => {
    return(
    <List title="Order List" {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField allowEmpty source="user" reference="api/users">
                <TextField source="username" />
            </ReferenceField>            
            <TextField label="First Name" source="firstName" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Email" source="email" />
            <TextField source="phone" />

            <ReferenceField label="Status" source="status" reference="api/status">
                <TextField source="label" />
            </ReferenceField>

            <DateField source="created_at" />
            
            <EditButton />
        </Datagrid>
    </List>
    )
}