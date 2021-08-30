import React, { useState } from 'react'
import styled from "styled-components"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

// components 
import Button from '../components/common/Button';
import FormInput from '../components/form/FormInput';

import logo from "../assets/img/logo.svg"

function SignIn() {
	const [user, setUser] = useState({email: "", password: ""})
	const [errors, setError] = useState({})

	function handleChange(event){
    let user = {email: "",password: ""}
    user[event.target.name] = event.target.value;
    setUser(user)
  };

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
									<FormInput
									name="email"
									type="email"
									value={user.email}
									onChange={handleChange}
									placeholder="Enter Address..."
									className="prompt srch_explore"
									error={errors.password}
									required
								/>
									<MailOutlineIcon  className="input__icon"/>
								</div>
							</div>
							<div className="ui search focus mt-2">
								<div className="ui left icon input swdh95">
								<FormInput
									name="password"
									type="password"
									value={user.password}
									onChange={handleChange}
									placeholder="Enter password..."
									className="prompt srch_explore"
									error={errors.password}
									required
								/>
									<VpnKeyIcon className="input__icon" />
								</div>
							</div>
							 <Button text="SignIn" type="submit" className="col-md-12" />
						</form>
						<p className="sgntrm145">Or <a href="forgot_password.html">Forgot Password</a>.</p>
						
					</div>
					<div className="sign_footer" > 2020 <strong>Cursus</strong>. All Rights Reserved.</div>
				</div>				
			</div>				
		</div>				
	</div>
  )
}
export default SignIn
