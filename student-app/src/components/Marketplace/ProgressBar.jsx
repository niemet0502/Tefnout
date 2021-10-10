import React from 'react'
import PropTypes from "prop-types"

function ProgressBar({completed}) {
  const containerStyles = {
    height: 12,
    width: '100%',
    backgroundColor: "#e9ecef",
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: `#2e7e32`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  const Container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '20px',
    minWidth: '180px'
  }

  return (
    <div style={Container}>
      <div className="d-flex justify-content-center mb-2">
        <div className="progressbar__rate">
          {completed} %
        </div>
      </div>

      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    </div>
    
  );
};

ProgressBar.propTypes ={
  completed: PropTypes.number
}

export default ProgressBar
