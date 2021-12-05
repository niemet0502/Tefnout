import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { connect } from 'react-redux';
import * as actions from "../store/authentication/authentication.actions"
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import { removeStoredAuthToken } from '../utils/currentUser';
import { Redirect } from 'react-router';

// components 
import Button from '../components/common/Button';
import FormInput from '../components/form/FormInput';

import logo from "../assets/img/logo.svg"

function SignIn({login, loading, hasErrors, token}) {
	const [email, setEmail] = useState('marius@niemet.com')
	const [password, setPassword] = useState('passer2019@')
	const [errors, setError] = useState({})

	function handleSubmit(e){
		e.preventDefault()

		let user = {email,password} 

		login(user)
		
	}

	if (token) return <Redirect to="/dashboard" />
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
						<h2>Bienvenue</h2>
						<p>Se connecter a notre plateforme!</p>

						<form onSubmit={handleSubmit}>
							<div className="ui search focus mt-2">
								<div className="ui left icon input swdh95">
									<FormInput
									name="email"
									type="email"
									value={email}
									onChange={({target}) => setEmail(target.value)}
									placeholder="Entrer votre email..."
									className="prompt srch_explore"
									error={errors.email}
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
									value={password}
									onChange={({target}) => setPassword(target.value)}
									placeholder="Entrer votre mot de passe..."
									className="prompt srch_explore"
									error={errors.password}
									required
								/>
									<VpnKeyIcon className="input__icon" />
								</div>
							</div>
							 <Button text="Connexion" className="col-md-12" />
							 {loading && 'Chargement...'}
							 {hasErrors && 'errors'}
						</form>
						<p className="sgntrm145">Ou <Link to="/reset-password">Réinitialisé mot de passe </Link>.</p>
						
					</div>
					<div className="sign_footer" > 2020 <strong>Cursus</strong>. Tout droit réservé .</div>
				</div>				
			</div>				
		</div>				
	</div>
  )
}

SignIn.propTypes = {
  loading: PropTypes.bool,
  login: PropTypes.func,
	hasErrors: PropTypes.bool,
	token: PropTypes.string
}

const mapStateToProps = state => {
	return {
		loading: state.authentication.loading,
		hasErrors: state.authentication.hasErrors,
		token: state.authentication.token
	}
}

const mapDispatchToProps = dispatch => {
	return {
		login: user => dispatch(actions.login(user))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
