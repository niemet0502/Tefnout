import React from 'react'
import achievement from "../../assets/img/achievement.svg"
function Card() {
  return (
    <div className="card_dash d-flex align-items-center justify-content-between">
      <div className="card_dash_left">
        <h5>Total Sales</h5>
        <h2>$350</h2>
        <span className="crdbg_1">New $50</span>
      </div>
      <div className="card_dash_right">
        <img src={achievement} alt="achievement" />
      </div>
    </div>
  )
}

export default Card
