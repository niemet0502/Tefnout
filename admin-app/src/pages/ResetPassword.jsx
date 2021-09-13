import React from 'react'
import { Link } from 'react-router-dom';

import logo from "../assets/img/logo.svg"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
function ResetPassword() {
  return (
    <div className="sign_in_up_bg" style={{height: '100vh'}}>
    <div className="container">
      <div className="row justify-content-lg-center justify-content-md-center">
        <div className="col-lg-12">
          <div className="main_logo25" id="logo">
            <a href="index.html"><img src={logo} alt="" /></a>
            <a href="index.html"></a>
          </div>
        </div>
      
        <div className="col-lg-6 col-md-8">
          <div className="sign_form">
            <h2>Request a Password Reset</h2>
            <form>
              <div className="ui search focus mt-50">
                <div className="ui left icon input swdh95">
                  <input className="prompt srch_explore" type="email" name="emailaddress" value="" id="id_email" required="" maxLength="64" placeholder="Email Address" />															
                  <MailOutlineIcon  className="input__icon"/>
                </div>
              </div>
              <button className="login-btn mb-2" type="submit">Reset Password</button>
            </form>
            <p className="mb-0 mt-30">Go Back <Link to="/">Sign In</Link></p>
          </div>
          <div className="sign_footer">© 2020 <strong>Cursus</strong>. All Rights Reserved.</div>
        </div>				
      </div>				
	  </div>	   
    </div>
  )
}

export default ResetPassword
