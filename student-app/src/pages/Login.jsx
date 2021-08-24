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
      <h2>I m login page</h2>

      <FormInput
        label="Username"
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
          label="Password"
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
        label="Submit"
        className="button"
        text="Submit"
        handleClick={onSubmit}
      />
    </LoginPage>
  )
}

const LoginPage = styled.div``;

export default Login
