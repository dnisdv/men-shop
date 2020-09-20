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

import {orders, banners, products, reviews, shipp_method, users, category, status} from './assests/icons'
 
import myDataProvider from './Providers/myDataProvider' 
import AuthProvider from './Providers/authProvider'

import { createBrowserHistory } from 'history';
const history = createBrowserHistory({ basename: "/admin" })

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
            dataProvider={myDataProvider('')}
            title='Admin Panel'
            history={history}
            >
            <Resource name="api/products" 
                options={{ label: "Products"}}
                edit={ProductEdit} 
                create={ProductCreate} 
                list={ProductList} 
                icon={ () => <img src={products} style={{opacity: 0.5}} width="23px" height="23px  " alt="products" />}
                 />
            <Resource name="api/reviews" 
                options={{ label: "Reviews"}}
                edit={ReviewEdit} 
                create={ReviewCreate} 
                list={ReviewList} 
                icon={ () => <img src={reviews} style={{opacity: 0.5}} width="23px" height="23px  " alt="products" />}

                 />
            <Resource name="api/users" 
                options={{ label: "Users"}}
                edit={UserEdit} 
                create={UserCreate} 
                list={UserList} 
                icon={ () => <img src={users} style={{opacity: 0.5}} width="23px" height="23px  " alt="products" />}
                 />
            <Resource name="api/category" 
                options={{ label: "Category"}}
                edit={CategoryEdit} 
                create={CategoryCreate} 
                list={CategoryList} 
                icon={ () => <img src={category} style={{opacity: 0.5}} width="23px" height="23px  " alt="products" />}
                />      
            <Resource name="api/orders" 
                options={{ label: "Orders"}}
                edit={OrderEdit} 
                // create={OrderCreate} 
                list={OrderList} 
                show={OrderShow}
                icon={ () => <img src={orders} style={{opacity: 0.5}} width="23px" height="23px  " alt="products" />}
                 /> 
            <Resource name="api/banner" 
                options={{ label: "Banners"}}
                edit={BannerEdit} 
                create={BannerCreate} 
                list={BannerList} 
                icon={ () => <img src={banners} style={{opacity: 0.5}} width="23px" height="23px  " alt="products" />}

                 /> 
            <Resource name="api/status" 
                options={{ label: "Order Status"}}
                edit={orderStatusEdit} 
                create={orderStatusCreate} 
                list={orderStatusList} 
                icon={ () => <img src={status} style={{opacity: 0.5}} width="23px" height="23px  " alt="products" />}
                 /> 
            <Resource name="api/shipping" 
                options={{ label: "Shipping Methods"}}
                edit={ShippingEdit} 
                create={ShippingCreate} 
                list={ShippingList} 
                icon={ () => <img src={shipp_method} style={{opacity: 0.5}} width="23px" height="23px  " alt="products" />}
                 /> 
        </Admin>
    )
}



export default AdminPanel