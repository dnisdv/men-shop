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
            authProvider={AuthProvider} 
            dataProvider={myDataProvider('http://localhost:5000')}
            title='Admin Panel'
            history={props.myHistory}
            >
            <Resource name="api/products" 
                edit={ProductEdit} 
                create={ProductCreate} 
                list={ProductList} 
                 />
            <Resource name="api/reviews" 
                edit={ReviewEdit} 
                create={ReviewCreate} 
                list={ReviewList} 
                 />
            <Resource name="api/users" 
                edit={UserEdit} 
                create={UserCreate} 
                list={UserList} 
                 />
            <Resource name="api/category" 
                edit={CategoryEdit} 
                create={CategoryCreate} 
                list={CategoryList} 
                />      
            <Resource name="api/orders" 
                edit={OrderEdit} 
                create={OrderCreate} 
                list={OrderList} 
                 /> 
            <Resource name="api/banner" 
                edit={BannerEdit} 
                create={BannerCreate} 
                list={BannerList} 
                 /> 

        </Admin>
    )
}



export default AdminPanel