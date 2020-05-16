import React,{useEffect} from 'react';
import AdminPanel from '../../components/AdminPanel/AdminPanel'

const AdminPage = () => {
  useEffect(() => {  
    window.scrollTo(0, 0)
  })
    return( 
      <AdminPanel />  
    )
}

export default AdminPage