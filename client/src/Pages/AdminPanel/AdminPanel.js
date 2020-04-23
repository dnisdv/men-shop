import React,{useEffect} from 'react';
import { Admin, Resource } from 'react-admin';
import axios from 'axios'

import {PostList, PostEdit, PostCreate} from './PostList'
import myDataProvider from './myDataProvider' 

const AdminPanel = () => {
    

    return(
        <Admin dataProvider={myDataProvider('http://localhost:5000')}>
            <Resource name="api/products" edit={PostEdit} create={PostCreate} list={PostList} />
        </Admin>
    )
}



export default AdminPanel