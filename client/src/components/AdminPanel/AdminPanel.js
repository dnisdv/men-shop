import React,{useEffect} from 'react';
import { Admin, Resource } from 'react-admin';

import {ProductList, ProductEdit, ProductCreate} from './Products'
import {ReviewList, ReviewEdit, ReviewCreate} from './Reviews'
import {UserList, UserEdit, UserCreate} from './Users'
import {CategoryList, CategoryEdit, CategoryCreate} from './Category'
import {OrderList, OrderEdit, OrderShow} from './Order'
import {BannerList, BannerEdit, BannerCreate} from './Banner'
import Dashboard from './Dashboard/Dashboard'
import {orderStatusCreate, orderStatusEdit, orderStatusList} from './OrderStatus'
import {ShippingCreate, ShippingList, ShippingEdit} from './shippingMethod'
 
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
            history={props.history}
            >
            <Resource name="api/products" 
                options={{ label: "Products"}}
                edit={ProductEdit} 
                create={ProductCreate} 
                list={ProductList} 
                 />
            <Resource name="api/reviews" 
                options={{ label: "Reviews"}}
                edit={ReviewEdit} 
                create={ReviewCreate} 
                list={ReviewList} 
                 />
            <Resource name="api/users" 
                options={{ label: "Users"}}
                edit={UserEdit} 
                create={UserCreate} 
                list={UserList} 
                 />
            <Resource name="api/category" 
                options={{ label: "Category"}}
                edit={CategoryEdit} 
                create={CategoryCreate} 
                list={CategoryList} 
                />      
            <Resource name="api/orders" 
                options={{ label: "Orders"}}
                edit={OrderEdit} 
                // create={OrderCreate} 
                list={OrderList} 
                show={OrderShow}
                 /> 
            <Resource name="api/banner" 
                options={{ label: "Banners"}}
                edit={BannerEdit} 
                create={BannerCreate} 
                list={BannerList} 
                 /> 
            <Resource name="api/status" 
                options={{ label: "Status"}}
                edit={orderStatusEdit} 
                create={orderStatusCreate} 
                list={orderStatusList} 
                 /> 
            <Resource name="api/shipping" 
                options={{ label: "Shipping Methods"}}
                edit={ShippingEdit} 
                create={ShippingCreate} 
                list={ShippingList} 
                 /> 
        </Admin>
    )
}



export default AdminPanel