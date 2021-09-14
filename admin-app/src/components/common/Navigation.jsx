import React from 'react'
import TopBar from '../layout/TopBar'
import Sidebar from '../layout/Sidebar/Sidebar'
import { getStoredAuthToken } from "../../utils/currentUser"
import { connect } from 'react-redux'
import PropTypes from "prop-types"

function Navigation({token,user}) {

  return (
    token !== null ? 
    <>
      <TopBar user={user} />
      <Sidebar user={user}/>
    </> : ''
  )
}
Navigation.propTypes = {
  token: PropTypes.any,
	user: PropTypes.object
}
const mapStateToProps = state => {
  return{
    token: state.authentication.token,
    user: state.authentication.user
  }
}

export default connect(mapStateToProps)(Navigation)
