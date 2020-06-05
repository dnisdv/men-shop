import React from 'react';
import { Show, Tab, TabbedShowLayout, NumberField, TextField, DateField, ReferenceField} from 'react-admin'
import SkuField from './Fields/skuField'

export default (props) => {

    return(
        <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Main">
                <TextField source="id" />
                <ReferenceField allowEmpty source="user" reference="api/users">
                    <TextField source="username" />
                </ReferenceField>      
                      
                <ReferenceField label="Status" source="status" reference="api/status">
                    <TextField source="label" />
                </ReferenceField>

                <TextField label="First Name" source="firstName" />
                <TextField label="Last Name" source="lastName" />
                <TextField label="Email" source="email" />

                <TextField source="company"  />
                <NumberField min={0} source="phone"  />
                <TextField source="country"  />
                <NumberField min={0} source="zip"  />
                <TextField source="state"  />
                <TextField source="address"  />
                <TextField source="city"  />


                
                <TextField source="phone" label="Phone Number" />
            </Tab>
            <Tab label="Order">
                <SkuField label="Products" source="products" />
            </Tab>
            <DateField source="created_at" />
        </TabbedShowLayout>
        </Show>
                )
}