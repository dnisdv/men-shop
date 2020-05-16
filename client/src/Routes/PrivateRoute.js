import React from 'react'

import {connect} from 'react-redux'
import {
    Route,
    Redirect
  } from "react-router-dom";



const PrivateRoute = ({authenticated, component: Component, ...rest}) => {

    return (
        <Route {...rest} render={props => (
            
            authenticated ?
                <Component {...props} />
            : <Redirect to="/Auth" />
        )} />
    );
};

const mapStateToProps = (state) => ({
    authenticated : Boolean(state.user.authenticated),
});

export default connect(mapStateToProps)(PrivateRoute)