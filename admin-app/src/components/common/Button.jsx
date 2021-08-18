import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'; 

function Button({text}) {
  return (
    <ButtonComponent>
      {text}
    </ButtonComponent>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

const ButtonComponent = styled.button`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  background: #ed2a26;
  padding: 9px 15px;
  border-radius: 3px;
  border: 1px solid #ed2a26;
`;

export default Button
