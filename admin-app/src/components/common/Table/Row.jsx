import React from 'react'
import PropTypes from 'prop-types';

//components 
import Cell from './Cell';

function Row({data}) {
  return (
    <tr>
      {data.map((cell, index) => {
       <h1>Test</h1>
      })}
    </tr>
  )
}

Row.propTypes = {
  data: PropTypes.array.isRequired
}

export default Row
