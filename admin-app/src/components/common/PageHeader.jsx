import React from 'react'
import PropTypes from "prop-types"

//components 
import Button from "../common/Button"
function PageHeader({Icon,text,children}) {
  return (
    <div className="card_dash1 col-md-12 d-flex align-items-center justify-content-between">
      <div className="">
        <h2 className="card_dash1_title">{Icon && <Icon/>}Jump Into {text} Creation</h2>
      </div>
      <div className="">
        {children}
      </div>
    </div>
  )
}
PageHeader.propTypes = {
  Icon: PropTypes.node,
  text:  PropTypes.string.isRequired,
  children: PropTypes.node
} 
export default PageHeader
