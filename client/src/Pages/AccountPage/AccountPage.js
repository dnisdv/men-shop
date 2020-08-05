import React,{useEffect} from 'react'
import './AccountPage.css'
import AccountMenu from '../../components/Account/AccountMenu/AccountMenu'
import AccountOrders from '../../components/Account/AccountOrders/AccountOrders'
import {
    Switch,
    Route,
    withRouter
  } from "react-router-dom";

import {connect} from 'react-redux'
  
  


const AccountPage = ({history, match, user: {authenticated}}) => {



if(!authenticated) return <div className='AccountPage'></div>
    
    return(
        <div className='AccountPage'>
            <AccountMenu />
            
            <div className='AccountPage_Data'>
                <Switch>
                    {/* <Route path={`${match.url}/settings`} render={ () => <AccountSettings />} /> */}
                    <Route path={`${match.url}/orders`} render={ () => <AccountOrders />} />
                    <Route path={`${match.url}`} render={ () => <AccountOrders />} />
                </Switch>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default withRouter(connect(mapStateToProps)(AccountPage))