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


function Login({handleLogin, loading, hasErrors, token}) {
  const [login, setLogin] = useState({email: "marius@niemet.com",password: "passer2019@"})
  const [signup, setSignup] = useState({username: "",password: "",email: ""})
  const [errors, setError] = useState({})
  const [submit, setSubmit] = useState(false)

  function handleChange(event){
    let user = {username: "",password: ""}
    user[event.target.name] = event.target.value;
    setUser(user)
  };

  function onSubmit(e){
    e.preventDefault()

    handleLogin(login)
  };

  if (token) return <Redirect to="/" />
  return (
    <LoginPage>
      <CourseBanner/>

      <section className="account_area pt-120 pb-90 mt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
                <div className="account_wrap">
                  <h3 className="title">Login your Account</h3>
                  <form >
                    <FormInput
                      name="username"
                      type="text"
                      value={login.email}
                      onChange={(e) => setLogin({...login, email: e.target.value})}
                      placeholder="Enter username..."
                      required
                      error={errors.username}
                      className="input"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={login.password}
                        onChange={(e) => setLogin({...login,password: e.target.value})}
                        placeholder="Enter password..."
                        className="input"
                        error={errors.password}
                        required
                      />

                    <Button
                      type="submit"
                      className="button"
                      text="Submit"
                      handleClick={onSubmit}
                    />

                  </form>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="account_wrap">
                  <h3 className="title">Sign up your Account</h3>
                  <form >
                    <FormInput
                      name="username"
                      type="text"
                      value={signup.username}
                      onChange={(e) => setSignup({...signup, username: e.target.value})}
                      placeholder="Enter username..."
                      required
                      error={errors.username}
                      className="input"
                    />
                    <FormInput
                      name="username"
                      type="text"
                      value={signup.email}
                      onChange={(e) => setSignup({...signup, email: e.target.value})}
                      placeholder="Enter email..."
                      required
                      error={errors.username}
                      className="input"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={signup.password}
                        onChange={(e) => setSignup({...signup, password: e.target.value})}
                        placeholder="Enter password..."
                        className="input"
                        error={errors.password}
                        required
                      />

                    <Button
                      type="submit"
                      className="button"
                      text="Submit"
                      handleClick={onSubmit}
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
		handleLogin: user => dispatch(actions.login(user))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
