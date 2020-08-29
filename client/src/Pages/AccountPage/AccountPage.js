import React from 'react'
import './AccountPage.css'
import AccountMenu from '../../components/Account/AccountMenu/AccountMenu'
import AccountOrders from '../../components/Account/AccountOrders/AccountOrders'
import {
    Switch,
    Route,
    withRouter
  } from "react-router-dom";
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

const AccountPage = ({match, user: {authenticated}}) => {

if(!authenticated) return <div className='AccountPage'></div>
    
    return(
        <div className='AccountPage'>
            <AccountMenu />
            
            <div className='AccountPage_Data'>
                <Switch>
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
AccountPage.propTypes = {
    match: PropTypes.object,
    authenticated: PropTypes.bool
}

export default withRouter(connect(mapStateToProps)(AccountPage))