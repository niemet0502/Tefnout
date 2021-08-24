import React from 'react'
import PropTypes from 'prop-types'; 

const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  ...props
}) => {
  
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        style={error && {border: 'solid 1px red'}}
      />
      { error && <p>{ error }</p>}
    </React.Fragment>
  )
}

FormInput.defaultProps = {
  type: "text",
  className: ""
}

FormInput.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
}

export default FormInput
