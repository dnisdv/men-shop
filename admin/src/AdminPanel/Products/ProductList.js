import React from 'react';
import { List, Datagrid, DateField, TextField, NumberField,
    EditButton } from 'react-admin';
    import './Products.css'

export default (props) => {
    return(
    <List title="Product List" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField className='ProductListTitle' source="title" />
            <DateField source="created_at" />
            <TextField source="rate" />
            <NumberField source="price" options={{
                    style: 'currency',
                    currency: 'USD',
                }} />
            <EditButton basePath="products" />
        </Datagrid>
    </List>
    )
}
