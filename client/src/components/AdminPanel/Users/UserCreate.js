import React from 'react';
import {Create, SimpleForm, TextInput, PasswordInput, SelectInput} from 'react-admin'

export default(props) => (
    <Create title="Create a User" {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="email" />
            <PasswordInput source="password" initiallyVisible />
            <TextInput source="age" />
            <SelectInput label='Role' defaultValue={'user'} source="role" choices={[
                    { id: 1, name: 'user' },
                    { id: 2, name: 'admin' },
                ]} optionValue="name" />
        </SimpleForm>
    </Create>
);