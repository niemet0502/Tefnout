import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PropTypes from "prop-types"
import { updateUser } from '../../store/settings/settings.actions';
//components 
import FormInput from "../../components/form/FormInput";
import FormTextArea from '../../components/form/FormTextArea';
import Button from "../../components/common/Button"
function Settings({currentUser, dispatch}) {
  const [user, setUser] = useState({})

  const handleSubmit = (e) =>{
    e.preventDefault()

    dispatch(updateUser(user))
  }

  useEffect(() => {
    setUser(currentUser)
  }, [currentUser])
  return (
    <div className="wrap-content">
      <div className="container-fluid">
        <h6 className="page-title"> <SettingsOutlinedIcon /> <span>Parametres</span></h6>

        <div className="basic_profile">
          <div className="basic_ptitle">
            <h4>Information de base</h4>
            <p>Ajouter des informations a propos de vous</p>
          </div>
          <div className="basic_form">
            <div className="row">
              <div className="col-lg-8">
                  <form onSubmit={handleSubmit}>
                <div className="row">

                  <div className="col-lg-6">
                    <div className="ui search focus mt-30">
                      <div className="help-block">Nom</div>
                      <div className="ui left icon input swdh11 swdh19">
                      <FormInput
                          name="name"
                          type="text"
                          value={user.name}
                          onChange={(e) => setUser({...user, name: e.target.value})}
                          placeholder=""
                          className="prompt srch_explore"
                          
                          required
                        />  													
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="help-block">Prenom</div>
                    <div className="ui search focus mt-30">
                      <div className="ui left icon input swdh11 swdh19">
                       <FormInput
                          name="name"
                          type="text"
                          value={user.firstname}
                          onChange={(e) => setUser({...user, firstname: e.target.value})}
                          placeholder=""
                          className="prompt srch_explore"
                          
                          required
                        /> 															
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mt-3">
                    <div className="ui search focus mt-30">
                      <div className="help-block">Email</div>
                      <div className="ui left icon input swdh11 swdh19">
                      <FormInput
                          name="name"
                          type="text"
                          value={user.email}
                          onChange={(e) => setUser({...user, email: e.target.value})}
                          placeholder=""
                          className="prompt srch_explore"
                          
                          required
                        />  													
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-3">
                    <div className="help-block">Telephone</div>
                    <div className="ui search focus mt-30">
                      <div className="ui left icon input swdh11 swdh19">
                       <FormInput
                          name="name"
                          type="text"
                          value={user.phone}
                          onChange={(e) => setUser({...user, phone: e.target.value})}
                          placeholder=""
                          className="prompt srch_explore"
                          
                          required
                        /> 															
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <div className="help-block">Specialite</div>
                    <div className="ui search focus mt-30">
                      <div className="ui left icon input swdh11 swdh19">
                       <FormInput
                          name="name"
                          type="text"
                          value={user.function}
                          onChange={(e) => setUser({...user, function: e.target.value})}
                          placeholder=""
                          className="prompt srch_explore"
                          
                          required
                        /> 															
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mt-3">
                    <div className="help-block">Biographie</div>
                    <div className="ui search focus mt-30">																
                      <div className="ui form swdh30">
                        <FormTextArea
                         name="bio"
                         value={user.bio}
                         onChange={(e) => setUser({...user, bio: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mt-3">
                    <div className="ui search focus mt-30">
                    <div className="help-block mb-3">Siteweb</div>
                      <div className="ui left icon labeled input swdh11 swdh31 d-flex">
                        <div className="ui label lb12" 
                            style={{backgroundColor: 'rgb(232,232,232)', 
                              height: '50px',
                              display: 'flex',
                              alignItems: 'center'}}>
                          https://
                        </div>
                        <FormInput
                          name="name"
                          type="text"
                          value={user.siteweb}
                          onChange={(e) => setUser({...user, siteweb: e.target.value})}
                          placeholder=""
                          className="prompt srch_explore"
                          
                          required
                        /> 
                      </div>
                    </div>
                  </div>
                  
                </div>
                  <Button 
                    classNames="modal-toggle ml-3 mt-4" 
                    text="Enregistrer"
                  /> 
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Settings.propTypes = {
  currentUser: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps =  state => {
  return {
    currentUser: state.authentication.user
  }
}

export default connect(mapStateToProps)(Settings)
