import React from 'react'

//images 
import user_profil from "../../assets/img/user_profil.jpg";

//icon 
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
function TopBar() {
  return (
    <header className="header clearfix">
		<button id="collapse_menu" className="collapse_menu d-flex align-items-center justify-content-center">
		 	<MenuOutlinedIcon />
		</button>
		<div className="main_logo" id="logo">
			<a href="index.html"></a>
			<a href="index.html"></a>
    </div>
		<div className="search120">
			<div className="ui search">
			  <div className="ui left icon input swdh10">
          <input className="prompt srch10" type="text" placeholder="Search for Tuts Videos, Tutors, Tests and more.."/>
          <i className='uil uil-search-alt icon icon1'></i>
			  </div>
			</div>
		</div>
		<div className="header_right">
			<ul>
				<li>
					<a href="create_new_course.html" className="upload_btn" title="Create New Course">Create New Course</a>
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
					<a href="#" className="opts_account" title="Account">
					<img src={user_profil} alt="user_profil" />
					</a>
					
				</li>
			</ul>
		</div>
	</header>
  )
}

export default TopBar
