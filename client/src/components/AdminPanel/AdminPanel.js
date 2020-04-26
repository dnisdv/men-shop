import React from 'react';
import { Admin, Resource } from 'react-admin';


import { cartIcon, categoryIcon, productsIcon, reviewsIcon, usersIcons } from './assests/icons'

import {ProductList, ProductEdit, ProductCreate} from './Products'
import {ReviewList, ReviewEdit, ReviewCreate} from './Reviews/Reviews'
import myDataProvider from './DataProvider/myDataProvider' 

import Dashboard from './Dashboard/Dashboard'


const AdminPanel = () => {

    return(
        <Admin dashboard={Dashboard} dataProvider={myDataProvider('http://localhost:5000')}>
            <Resource name="api/products" options={{ label: 'Products' }} 
                edit={ProductEdit} 
                create={ProductCreate} 
                list={ProductList} 
                icon={ () =><img src={productsIcon} alt='productIcon' width='20px' height='20px' />} />
            <Resource name="api/reviews" options={{ label: 'Reviews' }} 
                edit={ReviewEdit} 
                create={ReviewCreate} 
                list={ReviewList} 
                icon={ () =><img src={reviewsIcon} alt='reviewsIcon' width='20px' height='20px' />} />
            <Resource name="api/users" options={{ label: 'Users' }} 
                edit={ReviewEdit} 
                create={ReviewCreate} 
                list={ReviewList} 
                icon={ () =><img src={usersIcons} alt='usersIcon' width='20px' height='20px' />} />
            <Resource name="api/category" options={{ label: 'Category' }} 
                edit={ReviewEdit} 
                create={ReviewCreate} 
                list={ReviewList} 
                icon={ () =><img src={categoryIcon} alt='categoryIcon' width='20px' height='20px' />} />      
            <Resource name="api/order" options={{ label: 'Order' }} 
                edit={ReviewEdit} 
                create={ReviewCreate} 
                list={ReviewList} 
                icon={ () =><img src={cartIcon} alt='cartIcon' width='20px' height='20px' />} /> 
        </Admin>
    )
}



export default AdminPanel