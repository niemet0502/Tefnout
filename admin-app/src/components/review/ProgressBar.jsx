import React from 'react'
import PropTypes from "prop-types"

function ProgressBar({completed}) {
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e9ecef",
    borderRadius: 5,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: `#ed2a26`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

ProgressBar.propTypes ={
  completed: PropTypes.number
}

export default ProgressBar
