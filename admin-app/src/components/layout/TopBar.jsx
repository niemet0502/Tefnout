import React, { useState } from 'react'
import { logout } from "../../store/authentication/authentication.actions"
import { connect } from 'react-redux';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
//components 
import Button from '../common/Button';

//images 
import user_profil from "../../assets/img/user_profil.jpg";
import logo from "../../assets/img/logo.svg"

//icon 
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';

function TopBar({onLogout, user}) {
	const [userDropdown, setUserDropdown] = useState(false)

	const toggleUserDropdown = () => {
		setUserDropdown(!userDropdown);
	}

  return (
    <header className="header clearfix">
		<button id="collapse_menu" className="collapse_menu d-flex align-items-center justify-content-center">
		 	<MenuOutlinedIcon />
		</button>
		<div className="main_logo" id="logo">
			<a href="index.html"> <img src={logo} alt="logo" /> </a>
			<a href="index.html"></a>
    </div>
		<div className="top-category" style={{marginLeft: '16px'}}>
			<div className="ui compact menu cate-dpdwn">
				<div className="ui simple dropdown item">
					<a href="#" className="option_links p-0 ml-5" title="categories"><DashboardOutlinedIcon style={{fontSize: '30px'}}/></a>
				</div>
			</div>
		</div>
		<div className="search120">
			<div className="ui search">
			  <div className="ui left icon input swdh10">
				
          <input className="prompt srch10" type="text" placeholder="Search for Tuts Videos, Tutors ..."/>
			  </div>
			</div>
		</div>
		<div className="header_right">
			<ul>
				<li>
					{user.profil_id == 1 ? '' : <Link to="/new-course"> <Button text="Create New Course" /> </Link>  }
				
				</li>
				<li>
					<a href="shopping_cart.html" className="option_links" title="cart"><ShoppingCartOutlinedIcon /><span className="noti_count">2</span></a>
				</li>
				<li className="ui dropdown">
					<a href="#" className="option_links" title="Messages"><MailOutlineOutlinedIcon /><span className="noti_count">3</span></a>
					
				</li>
				<li className="ui dropdown">
					<a href="#" className="option_links" title="Notifications"><NotificationsActiveOutlinedIcon /> <span className="noti_count">3</span></a>
					 
				</li>
				<li className="ui dropdown">
					<a href="#" className="opts_account" title="Account" onClick={toggleUserDropdown}>
					{ user.avatar == null ? <img src={user_profil} alt="user_profil" /> : <img src={user.avatar} alt="user_profil" />  }
					</a>
					{userDropdown && 
					
					<div className="menu dropdown_account transition">
						<div className="channel_my">
							<div className="profile_link">
							{ user.avatar == null ? <img src={user_profil} alt="user_profil" /> : <img src={user.avatar} alt="user_profil" />  }
								<div className="pd_content">
									<div className="rhte85">
										<h6> {user.name}  {user.firstname}</h6>
										<div className="mef78" title="Verify">
											<i className='uil uil-check-circle'></i>
										</div>
									</div>
									<span>{user.email}</span>
								</div>							
							</div>
							<a href="my_instructor_profile_view.html" className="dp_link_12">View { user.profil_id == 1 ? 'Administrator' : 'Teacher'} Profile</a>						
						</div>
						<div className="night_mode_switch__btn">
							<a href="#" id="night-mode" className="btn-night-mode">
								<span className="icon"><NightsStayOutlinedIcon /></span> Night mode
								<span className="btn-night-mode-switch">
									<span className="uk-switch-button"></span>
								</span>
							</a>
						</div>
						<a href="instructor_dashboard.html" className="item channel_item">Cursus dashboard</a>						
						
						<button className="item channel_item col-md-12 bg-white" onClick={() => onLogout()}>Sign Out</button>
					</div>
					}

				</li>
			</ul>
		</div>
	</header>
  )
}

TopBar.propTypes = {
	onLogout: PropTypes.func,
	user: PropTypes.object
}

const mapDispatchToProps = dispatch => {
	return{
		onLogout: () => dispatch(logout())
	}
}

export default connect(null,mapDispatchToProps)(TopBar)
