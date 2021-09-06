import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { getStoredAuthToken, getStoredUserProfil } from "../../utils/currentUser"

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

export default PublicRoute
