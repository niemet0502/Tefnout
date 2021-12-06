import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import * as actions from "../store/authentication/authentication.actions"
// components 
import CourseBanner from '../components/Marketplace/Course/CourseBanner'
import FormInput from '../components/Marketplace/Form/FormInput'
import Button from '../components/Marketplace/Button'


function Login({handleLogin, loading, hasErrors, token, handleSignUp, Errors}) {
  const [login, setLogin] = useState({email: "mariusn@gmail.com",password: "passer2019@"})
  const [signup, setSignup] = useState({username: "",password: "",email: "", profil_id: 3})

  function onSubmit(e){
    e.preventDefault()

    handleLogin(login)
  };

  function handleSubmitSignUp(e){
    e.preventDefault()
    handleSignUp(signup);
    console.log(Object.getOwnPropertyNames(hasErrors).length );
    if(Object.getOwnPropertyNames(hasErrors).length === 0){
      setSignup({username: "",password: "",email: "", profil_id: 3})
    }
  }

  if (token) return <Redirect to="/" />
  return (
    <LoginPage>
      <CourseBanner/>

      <section className="account_area pt-120 pb-90 mt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
                <div className="account_wrap">
                  <h3 className="title">Se connecter</h3>

                 {hasErrors.message &&  <p style={{color: 'red'}}>Login ou mot de passe invalide !! </p>}
                  <form onSubmit={onSubmit}>
                    <FormInput
                      name="username"
                      type="text"
                      value={login.email}
                      onChange={(e) => setLogin({...login, email: e.target.value})}
                      placeholder="Entrer votre email..."
                      required
                      error={hasErrors.email ? hasErrors.email[0]: null}
                      className="input"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={login.password}
                        onChange={(e) => setLogin({...login,password: e.target.value})}
                        placeholder="Entrer mot de passe..."
                        className="input"
                        error={hasErrors.password ? hasErrors.password[0]: null}
                        required
                      />

                    <Button
                      type="submit"
                      className="button"
                      text="connexion"
                    />

                  </form>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="account_wrap">
                  <h3 className="title">S&apos;inscrire</h3>
                  <form onSubmit={handleSubmitSignUp}>
                    <FormInput
                      name="username"
                      type="text"
                      value={signup.username}
                      onChange={(e) => setSignup({...signup, username: e.target.value})}
                      placeholder="Entrer votre nom d'utilisateur..."
                      required
                      error={Errors.name ? Errors.name[0]: null}
                      className="input"
                    />
                    <FormInput
                      name="email"
                      type="text"
                      value={signup.email}
                      onChange={(e) => setSignup({...signup, email: e.target.value})}
                      placeholder="Entrer votre email..."
                      required
                      error={Errors.email ? Errors.email[0] : null}
                      className="input"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={signup.password}
                        onChange={(e) => setSignup({...signup, password: e.target.value})}
                        placeholder="Entrer votre mot de passe..."
                        className="input"
                        error={Errors.password ? Errors.password[0] : null}
                        required
                      />

                    <Button
                      type="submit"
                      className="button"
                      text="inscription"
                    />

                  </form>
                </div>
            </div>
          </div>
        </div>
      </section>
    </LoginPage>
  )
}

const LoginPage = styled.div`
  background-color: #f7f7f7;
  
  button{
    margin-left: -2px;
  }
`;

Login.propTypes = {
  loading: PropTypes.bool,
  handleLogin: PropTypes.func,
	hasErrors: PropTypes.bool,
	token: PropTypes.string,
  handleSignUp: PropTypes.func,
  Errors: PropTypes.object
}

const mapStateToProps = state => {
	return {
		loading: state.authentication.loading,
		hasErrors: state.authentication.hasErrors,
		token: state.authentication.token,
    Errors: state.authentication.Errors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleLogin: user => dispatch(actions.login(user)),
    handleSignUp: user => dispatch(actions.Signup(user))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
