import React from 'react'

import {connect} from 'react-redux'
import {
    Route,
    Redirect
  } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest}) => {

    return (
        <Route {...rest} render={props => (
             <Component {...props} />
        )} />
    );
};

const mapStateToProps = (state) => ({
    authenticated : Boolean(state.user.authenticated),
});

export default PublicRoute