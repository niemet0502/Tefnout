import React from 'react'
import TopBar from '../layout/TopBar'
import Sidebar from '../layout/Sidebar/Sidebar'
import { getStoredAuthToken } from "../../utils/currentUser"
import { connect } from 'react-redux'
import PropTypes from "prop-types"

function Navigation({token}) {

  return (
    token !== null ? 
    <>
      <TopBar />
      <Sidebar/>
    </> : ''
  )
}
Navigation.propTypes = {
  token: PropTypes.any
}
const mapStateToProps = state => {
  return{
    token: state.authentication.token
  }
}

export default connect(mapStateToProps)(Navigation)
