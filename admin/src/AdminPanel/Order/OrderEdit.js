import React from 'react';
import {Edit, SimpleFormIterator, ArrayInput, NumberInput, SimpleForm, TextInput, ReferenceInput, SelectInput} from 'react-admin'


export default (props) => (
    <Edit title="Order Edit" {...props}>
        <SimpleForm>
            <ReferenceInput source="user" reference="api/users" allowEmpty>
                <SelectInput optionText="username" />
            </ReferenceInput>

            <ArrayInput source="products">
                <SimpleFormIterator >

                    <ReferenceInput source="productID._id" label="Products" reference="api/products">
                        <SelectInput optionText='title' /> 
                    </ReferenceInput>   

                    <NumberInput min={0} label="Count" source="count" />

                </SimpleFormIterator>
            </ArrayInput>

            <ReferenceInput source="status" label="Status" reference="api/status">
                <SelectInput optionText='label' /> 
            </ReferenceInput>  

            <TextInput source="firstName"  />
            <TextInput source="lastName"  />
            <TextInput source="company"  />
            <TextInput source="email"  />
            <NumberInput min={0} source="phone"  />
            <TextInput source="country"  />
            <NumberInput min={0} source="zip"  />
            <TextInput source="state"  />
            <TextInput source="address"  />
            <TextInput source="city"  />

        </SimpleForm>
    </Edit>
);