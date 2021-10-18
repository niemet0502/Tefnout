import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { getStoredAuthToken } from "../../utils/currentUser"
import PropTypes from 'prop-types'; 

function PrivateRoute({component: Component, ...rest}) {
  return (
    <Route {...rest} render={props => (
      getStoredAuthToken() ?
      <Component {...props} />
      : <Redirect to="/login" />
    )}
    />
  )
}
PrivateRoute.propTypes = {
  component: PropTypes.func,
}

export default PrivateRoute
