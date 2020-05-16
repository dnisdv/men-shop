import React from 'react'

import {connect} from 'react-redux'
import {
    Route,
    Redirect
  } from "react-router-dom";

const AuthRoute = ({authenticated, component: Component, ...rest}) => {

    return (
        <Route {...rest} render={props => (
            authenticated ?
            <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

const mapStateToProps = (state) => ({
    authenticated : Boolean(state.user.authenticated),
});

export default connect(mapStateToProps)(AuthRoute)