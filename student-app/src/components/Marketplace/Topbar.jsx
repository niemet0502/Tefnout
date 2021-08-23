import React from 'react'
import {Link} from "react-router-dom"

// images 
import logo from "../../assets/img/logo.png"
function Topbar() {
  return (
    <div>
      <header className="header_area">
        <div id="sticky-header" className="header_bottom white_bg pl-130 pr-130" 
        style={{paddingLeft: '140px', paddingRight: '140px'}}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-2 col-6">
                        <div className="logo">
                        <Link to="/"><img src={logo} alt="" /></Link> 
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-8 d-none d-lg-block">
                        <nav className="main_menu">
                          <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>
                              <Link to="/courses">Courses</Link>
                            </li>
                          </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-6">
                        <div className="header_right">
                            <div className="account">
                                <Link to="/login">account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Topbar
