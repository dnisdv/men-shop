import React from 'react';
import {Create, SimpleForm, NumberInput,ArrayInput, SimpleFormIterator, TextInput, ReferenceInput, SelectInput } from 'react-admin'
export default(props) => {

    return(
        <Create title="Create a Order" {...props}>
            <SimpleForm>
                <ReferenceInput source="user" reference="api/users" allowEmpty >
                    <SelectInput optionText="username" />
                </ReferenceInput>

                <ArrayInput source="products">
                    <SimpleFormIterator >

                        <ReferenceInput source="product" label="Products" reference="api/products">
                            <SelectInput optionText='title' />
                        </ReferenceInput>   

                        <NumberInput min={0} label="Count" source="count" />
                    </SimpleFormIterator>
                </ArrayInput>

                <TextInput source="firstName"  />
                <TextInput source="lastName"  />
                <TextInput source="company"  />
                <TextInput source="email"  />
                <NumberInput min={0} source="phone"  />
                <TextInput source="country"  />
                <NumberInput min={0} source="zip"  />
                <TextInput source="state"  />
                <TextInput source="adress"  />
                <TextInput source="city"  />

            </SimpleForm>
        </Create>
    )
    }