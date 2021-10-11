import React from 'react'
import PropTypes from "prop-types"
import certifImage from "../../assets/img/certificate.png"

function Certificate({title}) {
  return (
    <div className="certification-container">
      <div className="courseHit ">
        <div className="courseHit__inner">
          <div className="courseHit__illustration js-illustration"  style={{background: `url(${certifImage})`}}>
            <span className="courseHit__author">
            <span className="courseHit__authorOriginal">Original</span>
            <span className="courseHit__authorOC"></span>
          </span>
          </div>
          <div className="courseHit__title">{title}</div>
        </div>
        <div className="courseHit__action">
          <span className="courseHit__actionLabel">
          <span className="pathAction pathAction--open">Voir le certificat</span>
          </span>
        </div>
      </div>
    </div>
  )
}

Certificate.propTypes = {
  title: PropTypes.string
}
export default Certificate
