import React from 'react'
import PropTypes from "prop-types"
import StarRateIcon from '@mui/icons-material/StarRate';
function StarRaiting({count}) {
  return (
    <div className="rating-box">
      {[...Array(Math.round(count))].map(index => (
        <StarRateIcon className="star-icon" key={index} style={{fill: "#f2b01e"}}/>
      ))}
       {[...Array(5-(Math.round(count)))].map(index => (
        <StarRateIcon className="star-icon" key={index} />
      ))}
    </div>
  )
}

StarRaiting.propTypes = {
  count: PropTypes.number
}
export default StarRaiting
