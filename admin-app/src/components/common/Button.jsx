import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'; 

function Button({
  text, 
  Icon,
  bgColor,
  bgColorHover,
  type,
  classNames,
  handleClick, 
  variant,
  disabled}) {
  return (
    <ButtonComponent 
      bgColor={bgColor} 
      bgColorHover={bgColorHover}
      type={type}
      className={classNames}
      onClick={handleClick}
      variant={variant}
      disabled={disabled}
      >
        {text} 
        {Icon && <Icon />}
    </ButtonComponent>
  )
}

Button.defaultProps = {
  variant: "primary"
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.node,
  bgColor: PropTypes.string,
  bgColorHover: PropTypes.string,
  type: PropTypes.string,
  classNames: PropTypes.string,
  handleClick: PropTypes.func,
  variant: PropTypes.string,
  disabled: PropTypes.bool
};

const ButtonComponent = styled.button`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.variant == "primary"  ? "#fff" : "#91699c"} ;
  background: ${props => props.variant == "primary"  ? "#ed2a26" : "#f3f3f3"};
  padding: 9px 15px;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${props => props.variant == "primary"  ? "#ed2a26" : "#f3f3f3"} ;
  margin-right: 10px;
`;

export default Button
