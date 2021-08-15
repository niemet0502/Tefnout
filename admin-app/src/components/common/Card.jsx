import React from 'react'
import PropTypes from 'prop-types';

import achievement from "../../assets/img/achievement.svg"

function Card({title,value,image}) {
  return (
    <div className="card_dash d-flex align-items-center justify-content-between">
      <div className="card_dash_left">
        <h5>{title}</h5>
        <h2>{value}</h2>
      </div>
      <div className="card_dash_right">
        <img src={achievement} alt="achievement" />
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card
