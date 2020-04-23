import React from 'react';
// import { List, Datagrid, DateField, TextField, EditButton} from 'react-admin';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';

export const PostList = (props) => {
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

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            {/* <TextInput source="teaser" options={{ multiLine: true }} /> */}
            {/* <TextInput multiline source="body" /> */}
            {/* <DateInput label="Publication date" source="published_at" /> */}
            {/* <TextInput source="average_note" /> */}
            {/* <TextInput disabled label="Nb views" source="views" /> */}
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);