import React from 'react';
import {List, Datagrid, TextField, DateField, EditButton} from 'react-admin'

const CategoryList = (props) => {
    return(
    <List title="Category List" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton basePath="category" />
        </Datagrid>
    </List>
    )
}

export default CategoryList