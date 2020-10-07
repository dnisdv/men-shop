import React from 'react';
import {List, Datagrid, TextField, DateField, EditButton} from 'react-admin'

const orderStatusList = (props) => {
    return(
    <List title="Order List" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton basePath="status" />
        </Datagrid>
    </List>
    )
}

export default orderStatusList