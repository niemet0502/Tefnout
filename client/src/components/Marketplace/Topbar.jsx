import React from 'react'
import {Link} from "react-router-dom"

// images 
import logo from "../../assets/img/logo.png"
function Topbar() {
  return (
    <div>
      <header class="header_area">
        <div id="sticky-header" class="header_bottom white_bg pl-130 pr-130" 
        style={{paddingLeft: '140px', paddingRight: '140px'}}>
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-xl-2 col-lg-2 col-6">
                        <div class="logo">
                        <Link to="/"><img src={logo} alt="" /></Link> 
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-8 d-none d-lg-block">
                        <nav class="main_menu">
                          <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>
                              <Link to="/courses">Courses</Link>
                            </li>
                          </ul>
                        </nav>
                    </div>
                    <div class="col-xl-3 col-lg-2 col-6">
                        <div class="header_right">
                            <div class="account">
                                <a href="account.html"><i class="fal fa-key"></i>account</a>
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
