import React from 'react'
import Button from "../../components/Marketplace/Button";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
//image 
import studentAvatar from '../../assets/img/student_profil.png';
function Settings({user}) {
  return (
    <div style={{background: 'rgb(247, 247, 247)'}}>
      <div className="wrap_content" >
        <div className="container-fluid">

       <div className="d-flex justify-content-end m-3 mr-0">
        <Link to="/settings/edit">
          <Button 
          text="Modifer"
          bgColorHover="#0073ff" 
          />
        </Link>
       </div>

          <div className="settings_card d-flex">

            <img src={studentAvatar} alt="" className="settings_card_img" />
            
            <div className="informations-container" style={{flex: '2'}}>
             <h6 className="settings_title"> {user.name} {user.firstname}</h6>
            </div>
          </div>

          <div className="settings_card">
            <h3 className="settings_title">À propos de moi</h3>
            <div className="d-flex justify-content-between">
              <p>Nom : {user.name} {user.firstname} </p>
              <p>Date de naissance: </p>
              <p>Telephone: </p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Email : {user.email} </p>
              <p>Lieu de naissance:</p>
              <p></p>
            </div>
          </div>

          { user.bio == null ? '' : 
            <div className="settings_card d-flex">
             <h6 className="settings_title">Biographie</h6>

             <p>{user.bio}</p>
            </div>
          }


          <div className="settings_card">
            <h6 className="settings_title">Information sur le compte</h6>
            <p>Date d&lsquo; inscription : {user.created_at.substr(0,10)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Settings.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = state => {
  return{
    user: state.authentication.user
  }
}

export default connect(mapStateToProps)(Settings)
