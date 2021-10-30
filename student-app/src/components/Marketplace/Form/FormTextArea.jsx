import React from 'react'
import PropTypes from 'prop-types'; 

function FormTextArea({
  name,
  onChange,
  className,
  value,
  error,
  children,
  label,
 placeholder,
  ...props
}) {
  return (
    <>
      <label className="label mt-4" htmlFor={name}>{label}</label>
      <textarea 
        cols="30"
        rows="10"
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className={className}
        style={error && {border: 'solid 1px red'}}
        placeholder={placeholder}
      >
        {placeholder}
      </textarea>
    </>
  )
}

FormTextArea.defaultProps = {
  type: "text",
  className: "",
 placeholder: ""
}

FormTextArea.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}
export default FormTextArea
