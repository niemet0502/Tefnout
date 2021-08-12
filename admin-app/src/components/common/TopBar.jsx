import React from 'react'

function TopBar() {
  return (
    <header className="header clearfix">
		<button type="button" id="toggleMenu" className="toggle_menu">
		  <i className='uil uil-bars'></i>
		</button>
		<button id="collapse_menu" className="collapse_menu">
			<i className="uil uil-bars collapse_menu--icon "></i>
			<span className="collapse_menu--label"></span>
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
					<a href="shopping_cart.html" className="option_links" title="cart"><i className='uil uil-shopping-cart-alt'></i><span className="noti_count">2</span></a>
				</li>
				<li className="ui dropdown">
					<a href="#" className="option_links" title="Messages"><i className='uil uil-envelope-alt'></i><span className="noti_count">3</span></a>
					<div className="menu dropdown_ms">
						<a href="#" className="channel_my item">
							<div className="profile_link">
								
								<div className="pd_content">
									<h6>Zoena Singh</h6>
									<p>Hi! Sir, How are you. I ask you one thing please explain it this video price.</p>
									<span className="nm_time">2 min ago</span>
								</div>							
							</div>							
						</a>
						<a href="#" className="channel_my item">
							<div className="profile_link">
								
								<div className="pd_content">
									<h6>Joy Dua</h6>
									<p>Hello, I paid you video tutorial but did not play error 404.</p>
									<span className="nm_time">10 min ago</span>
								</div>							
							</div>							
						</a>
						<a href="#" className="channel_my item">
							<div className="profile_link">
								
								<div className="pd_content">
									<h6>Jass</h6>
									<p>Thanks Sir, Such a nice video.</p>
									<span className="nm_time">25 min ago</span>
								</div>							
							</div>							
						</a>
						<a className="vbm_btn" href="instructor_messages.html">View All <i className='uil uil-arrow-right'></i></a>
					</div>
				</li>
				<li className="ui dropdown">
					<a href="#" className="option_links" title="Notifications"><i className='uil uil-bell'></i><span className="noti_count">3</span></a>
					<div className="menu dropdown_mn">
						<a href="#" className="channel_my item">
							<div className="profile_link">
								
								<div className="pd_content">
									<h6>Rock William</h6>
									<p>Like Your Comment On Video <strong>How to create sidebar menu</strong>.</p>
									<span className="nm_time">2 min ago</span>
								</div>							
							</div>							
						</a>
						<a href="#" className="channel_my item">
							<div className="profile_link">
								
								<div className="pd_content">
									<h6>Jassica Smith</h6>
									<p>Added New Review In Video <strong>Full Stack PHP Developer</strong>.</p>
									<span className="nm_time">12 min ago</span>
								</div>							
							</div>							
						</a>
						<a href="#" className="channel_my item">
							<div className="profile_link">
							
								<div className="pd_content">
									<p> Your Membership Approved <strong>Upload Video</strong>.</p>
									<span className="nm_time">20 min ago</span>
								</div>							
							</div>							
						</a>
						<a className="vbm_btn" href="instructor_notifications.html">View All <i className='uil uil-arrow-right'></i></a>
					</div>
				</li>
				<li className="ui dropdown">
					<a href="#" className="opts_account" title="Account">
					
					</a>
					<div className="menu dropdown_account">
						<div className="channel_my">
							<div className="profile_link">
								
								<div className="pd_content">
									<div className="rhte85">
										<h6>Joginder Singh</h6>
										<div className="mef78" title="Verify">
											<i className='uil uil-check-circle'></i>
										</div>
									</div>
									<span>gambol943@gmail.com</span>
								</div>							
							</div>
							<a href="my_instructor_profile_view.html" className="dp_link_12">View Instructor Profile</a>						
						</div>
						<div className="night_mode_switch__btn">
							<a href="#" id="night-mode" className="btn-night-mode">
								<i className="uil uil-moon"></i> Night mode
								<span className="btn-night-mode-switch">
									<span className="uk-switch-button"></span>
								</span>
							</a>
						</div>
						<a href="instructor_dashboard.html" className="item channel_item">Cursus dashboard</a>						
						<a href="membership.html" className="item channel_item">Paid Memberships</a>
						<a href="setting.html" className="item channel_item">Setting</a>
						<a href="help.html" className="item channel_item">Help</a>
						<a href="feedback.html" className="item channel_item">Send Feedback</a>
						<a href="sign_in.html" className="item channel_item">Sign Out</a>
					</div>
				</li>
			</ul>
		</div>
	</header>
  )
}

export default TopBar
