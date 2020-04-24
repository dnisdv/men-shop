import React,{useEffect} from 'react';
import { Admin, Resource } from 'react-admin';
import axios from 'axios'

import {ProductsList, ProductsEdit, ProductsCreate} from './Products/Products'
import {ReviewList, ReviewEdit, ReviewCreate} from './Reviews/Reviews'
import myDataProvider from './DataProvider/myDataProvider' 

const AdminPanel = () => {
    

    return(
        <Admin dataProvider={myDataProvider('http://localhost:5000')}>
            <Resource name="api/products" options={{ label: 'Products' }} edit={ProductsEdit} create={ProductsCreate} list={ProductsList} />
            <Resource name="api/reviews" options={{ label: 'Reviews' }} edit={ReviewEdit} create={ReviewCreate} list={ReviewList} />
            <Resource name="api/users" options={{ label: 'Users' }} edit={ReviewEdit} create={ReviewCreate} list={ReviewList} />
            <Resource name="api/category" options={{ label: 'Category' }} edit={ReviewEdit} create={ReviewCreate} list={ReviewList} />      
            <Resource name="api/order" options={{ label: 'Order' }} edit={ReviewEdit} create={ReviewCreate} list={ReviewList} /> 

        </Admin>
    )
}



export default AdminPanel