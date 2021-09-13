import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { getStoredAuthToken, getStoredUser } from "../../utils/currentUser"
import PropTypes from 'prop-types'; 

function PublicRoute({component: Component, resticted, ...rest}) {
  return (
    <Route {...rest} render={props => (
      getStoredAuthToken() && resticted ?
       <Redirect to="/dashboard" />
      : <Component {...props} />
    )}
    />
  )
}

PublicRoute.propTypes = {
  component: PropTypes.any,
  resticted: PropTypes.bool,
}

export default PublicRoute
