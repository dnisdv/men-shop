import React, {useEffect} from 'react'

import {connect} from 'react-redux'
import {
    Route,
    Redirect
  } from "react-router-dom";

import {checkLogin} from '../actions/userActions'


const PrivateRoute = ({checkLogin, authenticated, component: Component, ...rest}) => {
    useEffect(() => {
    }, [])
    return (
        <Route {...rest} render={props => (
            authenticated ? (<Component {...props} />)
            : (<Redirect to="/Auth" />)
        )} />
    );
};

const mapStateToProps = (state) => ({
    authenticated : Boolean(state.user.authenticated),
});

export default connect(mapStateToProps, {checkLogin})(PrivateRoute)
