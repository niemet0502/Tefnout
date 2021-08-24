import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

function Button({
  text, 
  Icon,
  bgColor,
  bgColorHover,
  type,
  classNames,
  handleClick}) {
  return (
    <ButtonComponent 
      bgColor={bgColor} 
      bgColorHover={bgColorHover}
      type={type}
      className={classNames}
      onClick={handleClick}
      >
        {text} 
        {Icon && <Icon />}
    </ButtonComponent>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired,
  bgColorHover: PropTypes.string.isRequired,
  type: PropTypes.string,
  classNames: PropTypes.string,
  handleClick: PropTypes.func
};

const ButtonComponent = styled.button`
  
  margin: 5px;
	font-size: 14px;
	padding: 16px 30px;
	text-align: center;
	position: relative;
	color: ${props => props.bgColor == '#ffff' ? '#8d8d8d' : '#ffff'};
	text-transform: uppercase;
	font-weight: 600;
	display: inline-block;
	border: 2px solid transparent;
  background-color: ${props => props.bgColor || "#0073ff"};

  display: flex;
  align-items: center;

  &:hover {
    color: #ffff;
    background-color: ${props => props.bgColorHover || "#e5175c"};
  }

  svg{
    margin-left: 5px;
  }
`;

export default Button
