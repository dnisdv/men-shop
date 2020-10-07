import React from 'react';
import AdminPanel from './AdminPanel/AdminPanel'
import axios from 'axios'

if(process.env.NODE_ENV !== "production"){
  axios.defaults.baseURL = "http://localhost:5000";
}


function App() {
  return (
    <div className="App">
      <AdminPanel />
    </div>
  );
}

export default App;
