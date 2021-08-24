import React, { useState } from 'react'
import styled from 'styled-components'

// components 
import CourseBanner from '../components/Marketplace/Course/CourseBanner'
import FormInput from '../components/Marketplace/Form/FormInput'
import Button from '../components/Marketplace/Button'

function Login() {
  const [user, setUser] = useState({username: "",password: ""})
  const [errors, setError] = useState({})
  const [submit, setSubmit] = useState(false)

  function handleChange(event){
    let user = {username: "",password: ""}
    user[event.target.name] = event.target.value;
    setUser(user)
  };

  function onSubmit(){
    

    let err = {};

    if (!user.username) {
      err.username = "Enter your username!";
    }

    if (user.password.length < 8) {
      err.password = "Password must be at least 8 characters!";
    }

    setError(err, () => {
      if (Object.getOwnPropertyNames(errors).length === 0) {
        setSubmit(true)
      }
    });

  };

  return (
    <LoginPage>
      <CourseBanner/>

      <section className="account_area pt-120 pb-90 mt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
                <div className="account_wrap">
                  <h3 className="title">Login your Account</h3>
                  <form action="">
                    <FormInput
                      name="username"
                      type="text"
                      value={user.username}
                      onChange={handleChange}
                      placeholder="Enter username..."
                      required
                      error={errors.username}
                      className="input"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={user.password}
                        onChange={handleChange}
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
                  <form action="">
                    <FormInput
                      name="username"
                      type="text"
                      value={user.username}
                      onChange={handleChange}
                      placeholder="Enter username..."
                      required
                      error={errors.username}
                      className="input"
                    />
                    <FormInput
                      name="username"
                      type="text"
                      value={user.username}
                      onChange={handleChange}
                      placeholder="Enter email..."
                      required
                      error={errors.username}
                      className="input"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={user.password}
                        onChange={handleChange}
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

export default Login
