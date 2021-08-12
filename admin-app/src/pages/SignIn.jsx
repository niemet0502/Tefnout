import React from 'react'
import styled from "styled-components"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import logo from "../assets/img/logo.svg"

function SignIn() {
  return (
    <div className="sign_in_up_bg">
		<div className="container">
			<div className="row justify-content-lg-center justify-content-md-center">
				<div className="col-lg-12">
					<div className="main_logo25" id="logo">
						<a href="index.html"> <img src={logo} alt="" /></a>
						<a href="index.html"></a>
					</div>
				</div>
			
				<div className="col-lg-6 col-md-8">
					<div className="sign_form">
						<h2>Welcome Back</h2>
						<p>Log In to Your Edututs+ Account!</p>

						<form>
							<div className="ui search focus mt-2">
								<div className="ui left icon input swdh95">
									<input className="prompt srch_explore" type="email" name="emailaddress" value="" id="id_email" required="" placeholder="Email Address"/>															
									<MailOutlineIcon  className="input__icon"/>
								</div>
							</div>
							<div className="ui search focus mt-2">
								<div className="ui left icon input swdh95">
									<input className="prompt srch_explore" type="password" name="password" value="" id="id_password" required=""  placeholder="Password"/>
									<VpnKeyIcon className="input__icon" />
								</div>
							</div>
							<button className="login-btn" type="submit">Sign In</button>
						</form>
						<p className="sgntrm145">Or <a href="forgot_password.html">Forgot Password</a>.</p>
						<p className="mb-0 mt-30">Dont have an account? <a href="sign_up.html">Sign Up</a></p>
					</div>
					<div className="sign_footer"> 2020 <strong>Cursus</strong>. All Rights Reserved.</div>
				</div>				
			</div>				
		</div>				
	</div>
  )
}
export default SignIn
