import React from 'react'

function Cell({index,content,header}) {
  return (
    <div>
      
    </div>
  )
}

Cell.propTypes = {
  index: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  header: PropTypes.bool
};
export default Cell
