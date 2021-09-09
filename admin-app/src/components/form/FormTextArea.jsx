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
  ...props
}) {
  return (
    <>
      <label className="label mt-4" htmlFor={name}>{label}</label>
      <textarea 
        row="3"
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className={className}
        style={error && {border: 'solid 1px red'}}
      >
      </textarea>
    </>
  )
}

FormTextArea.defaultProps = {
  type: "text",
  className: ""
}

FormTextArea.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
}
export default FormTextArea
