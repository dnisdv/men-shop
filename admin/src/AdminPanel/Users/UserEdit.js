import React from 'react';
import {Edit, SimpleForm, TextInput, PasswordInput, SelectInput} from 'react-admin'


export default (props) => (
    <Edit title="User Edit" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="username" />
            <TextInput source="email" />
            <PasswordInput source="password" initiallyVisible />
            <TextInput source="age" />
            <SelectInput label='Role' translateChoice source="role" choices={[
                    { id: 1, name: 'user' },
                    { id: 2, name: 'admin' },
                ]} optionValue="name" />
        </SimpleForm>
    </Edit>
);