import React from 'react'
import styled from 'styled-components'

// components 
import CourseBanner from '../components/Marketplace/Course/CourseBanner'

function Login() {
  return (
    <LoginPage>
      <CourseBanner/>
      <h2>I'm login page</h2>
    </LoginPage>
  )
}

const LoginPage = styled.div``;

export default Login
