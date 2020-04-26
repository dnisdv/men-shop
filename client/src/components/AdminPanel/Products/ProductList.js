import React from 'react';
import { List, Datagrid, DateField, TextField, 
    EditButton } from 'react-admin';

export default (props) => {
    return(
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="created_at" />
            <TextField source="rate" />
            <TextField source="price" />
            <EditButton basePath="products" />
        </Datagrid>
    </List>
    )
}
