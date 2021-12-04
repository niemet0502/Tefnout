import React from 'react'
import { connect } from 'react-redux'
import bai_shape from "../../assets/img/bai_shape_01.png"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
function Footer({currentUser}) {
  return (
    <div style={{background: '#F7F7F7'}}>
      {currentUser == null ? 
        <section className="bai_area bai_bootom_space">
        <div className="container">
            <div className="row g-0">
                <div className="col-lg-12">
                    <div className="bai_wrap bai_left theme_bg">
                        <span># Become A Instructor</span>
                        <h3>Become a Instructor</h3>
                        
                        <Link to="/contact" className="thm_btn thm_btn-border">apply now</Link>
                        
                        <div className="bai_shape">
                            <img src={bai_shape} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section> : null }
    <footer className="footer_area footer_bg footer_space">
        <div className="container">
            <div className="footer_bottom">
                <div className="left f-left ul_li">
                    <div className="logo">
                        <a href="index.html"><img src="assets/img/logo/logo_white.png" alt=""/></a>
                    </div>
                    <ul className="info ul_li">
                        <li>info@webmail.com</li>
                        <li> 24/7</li>
                    </ul>
                </div>
                <div className="right f-right">
                  {currentUser == null ? 
                    <a className="thm_btn thm_btn-border" href="account.html">Connexion<i className="fal fa-key"></i></a>
                  : null}
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

Footer.propTypes = {
  currentUser: PropTypes.object
}

const mapStateToProps = state => {
  return {
    currentUser: state.authentication.user.id
  }
}

export default connect(mapStateToProps)(Footer)
