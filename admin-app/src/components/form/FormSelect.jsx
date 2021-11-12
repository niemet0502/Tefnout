import React from 'react'
import PropTypes from "prop-types"
function FormSelect({
  name,
  type,
  onChange,
  className,
  value,
  error,
  children,
  label,
  options
}) {
  return (
    <>
      <label htmlFor="" className="label">{label}</label>
      <select 
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className={`select-field ${className}`}
        >
          {options.map(option => (
            <option value={option.id} key={option.id}> {option.name} </option>
          ))}
      </select>
    </>
  )
}

FormSelect.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array
}

export default FormSelect
