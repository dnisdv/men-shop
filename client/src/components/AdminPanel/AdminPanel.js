import React,{useEffect} from 'react';
import { Admin, Resource } from 'react-admin';

import { cartIcon, categoryIcon, productsIcon, reviewsIcon, usersIcon, bannerIcon } from './assests/icons'
import {ProductList, ProductEdit, ProductCreate} from './Products'
import {ReviewList, ReviewEdit, ReviewCreate} from './Reviews'
import {UserList, UserEdit, UserCreate} from './Users'
import {CategoryList, CategoryEdit, CategoryCreate} from './Category'
import {OrderList, OrderEdit, OrderCreate} from './Order'
import {BannerList, BannerEdit, BannerCreate} from './Banner'
import Dashboard from './Dashboard/Dashboard'
 
import myDataProvider from './Providers/myDataProvider' 
import AuthProvider from './Providers/authProvider'

const AdminPanel = (props) => {

    useEffect( ()=> {
        const header = props.headerRef.current
        const footer = props.footerRef.current
        header.style.display = 'none'
        footer.style.display = 'none'
        return( () => {
            header.style.display = 'flex'
            footer.style.display = 'flex'
        })
    }, [props.footerRef, props.headerRef])


    return(
        <Admin 
            dashboard={Dashboard} 
            // authProvider={AuthProvider} 
            title='Admin Panel'
            dataProvider={myDataProvider('http://localhost:5000')}
            {...props}>
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