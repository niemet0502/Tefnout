import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { getStoredAuthToken } from "../../utils/currentUser"

function PrivateRoute({component: Component, ...rest}) {
  return (
    <Route {...rest} render={props => (
      getStoredAuthToken() ?
      <Component {...props} />
      : <Redirect to="/authenticate" />
    )}
    />
  )
}

export default PrivateRoute
