import React from 'react'
import './AccountMenu.css'
import {Link} from "react-router-dom"

import {withRouter} from 'react-router-dom'
import {logoutUser} from '../../../actions/userActions'
import {connect} from 'react-redux'

import PropTypes from 'prop-types';


const AccountMenu = ({logoutUser, history, user}) => {

    const LogOutHandler = () => {
        return logoutUser(history)
    }
    return( 
        <div className="AccountMenu">
            <h2 className="AccountMenu_Title">Hi {user.username}</h2>
            <ul className="AccountMenu_List">
                <li className="AccountMenu_List_Item">
                    <Link className='AccountMenu_List_Item_Title' to="/account/orders">Your orders</Link>
                </li>
                <li className="AccountMenu_List_Item">
                   <span onClick={LogOutHandler} className='AccountMenu_List_Item_Title'>Log Out</span>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

AccountMenu.propTypes = {
    logoutUser: PropTypes.func,
    history: PropTypes.object,
    user: PropTypes.object
}



export default withRouter(connect(mapStateToProps, {logoutUser})(AccountMenu))