import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
//components 
import FormInput from '../../components/Marketplace/Form/FormInput';
//image 
import studentAvatar from '../../assets/img/student_profil.png';
function SettingsEdit({currentUser, dispatch}) {
  const [user, setUser] = useState({})

  const handleSubmit = (e) =>{
    e.preventDefault()

    dispatch(updateUser(user))
  }

  useEffect(() => {
    setUser(currentUser)
  }, [currentUser])

  return (
    <div style={{background: 'rgb(247, 247, 247)'}}>
       <div className="wrap_content">
        <div className="container-fluid">
          <div className="d-flex mt-4">
            <img src={studentAvatar} alt="" className="settings_card_img" />
            <div style={{flex: '2'}} className="border border-danger">
              <form onSubmit={handleSubmit}>
              <FormInput
                name="username"
                type="text"
                value={user.name}
                label="Name"
                onChange={(e) => setUser({...user, name: e.target.value})}
                placeholder=""
                required
                className="input"
              />

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
SettingsEdit.propTypes = {
  currentUser: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps =  state => {
  return {
    currentUser: state.authentication.user
  }
}
export default connect(mapStateToProps)(SettingsEdit)
