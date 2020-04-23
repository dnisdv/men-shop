import React from 'react';
// import { List, Datagrid, DateField, TextField, EditButton} from 'react-admin';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput} from 'react-admin';

export const UsersList = (props) => {
    console.log(props)
    return(
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="category" />
            <TextField source="title" />
            <DateField source="created_at" />
            <TextField source="rate" />
            <TextField source="price" />
            <EditButton basePath="products" />
        </Datagrid>
    </List>
    )
}

const UsersTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const UsersEdit = (props) => (
    <Edit title={<UsersTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);

export const UsersCreate = (props) => (
    <Create title="Create a User" {...props}>
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);