import React from 'react';
import { Admin, Resource } from 'react-admin';


import { cartIcon, categoryIcon, productsIcon, reviewsIcon, usersIcon, bannerIcon } from './assests/icons'

import {ProductList, ProductEdit, ProductCreate} from './Products'
import {ReviewList, ReviewEdit, ReviewCreate} from './Reviews'
import {UserList, UserEdit, UserCreate} from './Users'
import {CategoryList, CategoryEdit, CategoryCreate} from './Category'
import {OrderList, OrderEdit, OrderCreate} from './Order'
import {BannerList, BannerEdit, BannerCreate} from './Banner'
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
                edit={UserEdit} 
                create={UserCreate} 
                list={UserList} 
                icon={ () =><img src={usersIcon} alt='usersIcon' width='20px' height='20px' />} />
            <Resource name="api/category" options={{ label: 'Category' }} 
                edit={CategoryEdit} 
                create={CategoryCreate} 
                list={CategoryList} 
                icon={ () =><img src={categoryIcon} alt='categoryIcon' width='20px' height='20px' />} />      
            <Resource name="api/orders" options={{ label: 'Orders' }} 
                edit={OrderEdit} 
                create={OrderCreate} 
                list={OrderList} 
                icon={ () =><img src={cartIcon} alt='cartIcon' width='20px' height='20px' />} /> 
            <Resource name="api/banner" options={{ label: 'Banners' }} 
                edit={BannerEdit} 
                create={BannerCreate} 
                list={BannerList} 
                icon={ () =><img src={bannerIcon} alt='cartIcon' width='20px' height='20px' />} /> 
        </Admin>
    )
}



export default AdminPanel