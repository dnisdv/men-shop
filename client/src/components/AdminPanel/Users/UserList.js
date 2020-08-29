import React from 'react';
import {List, Datagrid, TextField, DateField, EditButton} from 'react-admin'

export default (props) => {
    return(
    <List title="User List" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="email" />
            <TextField source="age" />
            <TextField source="role" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton basePath="users" />
        </Datagrid>
    </List>
    )
}