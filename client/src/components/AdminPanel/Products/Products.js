import React from 'react';
// import { List, Datagrid, DateField, TextField, EditButton} from 'react-admin';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';

export const ProductsList = (props) => {
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

const ProductsTitle = ({ record }) => {
    return <span>Products {record ? `"${record.title}"` : ''}</span>;
};

export const ProductsEdit = (props) => (
    <Edit title={<ProductsTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);

export const ProductsCreate = (props) => (
    <Create title="Create a Product" {...props}>
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);