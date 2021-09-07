import React from 'react'
import { Link } from 'react-router-dom';

//icons 
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';

function Sidebar() {
  return (
    <nav className="vertical_nav">
		<div className="left_section menu_left" id="js-menu" >
			<div className="left_section">
				<ul>
					<li className="menu--item">
						<Link to="/dashboard">
              <DashboardOutlinedIcon className="uil uil-apps menu--icon" />
							<span className="menu--label">Dashboard</span>
						</Link>
					</li>
					<li className="menu--item">
						<a href="instructor_dashboard.html" className="menu--link d-flex align-items-center" title="Dashboard">
              <CategoryOutlinedIcon className="uil uil-apps menu--icon" />
							<span className="menu--label">Categories</span>
						</a>
					</li>
					<li className="menu--item">
						<a href="instructor_courses.html" className="menu--link d-flex align-items-center" title="Courses">

              <LibraryBooksOutlinedIcon className='uil uil-book-alt menu--icon' />
							<span className="menu--label">Courses</span>
						</a>
					</li>

					<li className="menu--item">
						<a href="create_new_course.html" className="menu--link d-flex align-items-center" title="Create Course">
							
              <AddCircleOutlineOutlinedIcon className='uil uil-plus-circle menu--icon' />
							<span className="menu--label">Create Course</span>
						</a>
					</li>
					<li className="menu--item">
						<a href="instructor_messages.html" className="menu--link d-flex align-items-center" title="Messages">
						
              <ForumOutlinedIcon className='uil uil-comments menu--icon' />
							<span className="menu--label">Messages</span>
						</a>
					</li>
					<li className="menu--item">
						<a href="instructor_notifications.html" className="menu--link d-flex align-items-center" title="Notifications">
						  
              <NotificationsActiveOutlinedIcon className='uil uil-bell menu--icon' />
						  <span className="menu--label">Notifications</span>
						</a>
					</li>
					<li className="menu--item">
						<a href="instructor_all_reviews.html" className="menu--link active d-flex align-items-center" title="Reviews">
						  
              <StarBorderOutlinedIcon className='uil uil-star menu--icon' />
						  <span className="menu--label">Reviews</span>
						</a>
					</li>
					
					<li className="menu--item">
						<a href="instructor_verification.html" className="menu--link d-flex align-items-center" title="Verification">
						  
              <VerifiedUserOutlinedIcon className='uil uil-check-circle menu--icon' />
						  <span className="menu--label">My Certificates</span>
						</a>
					</li>
				</ul>
			</div>
			<div className="left_section pt-2">
				<ul>
					<li className="menu--item">
						<a href="setting.html" className="menu--link d-flex align-items-center" title="Setting">
							
              <SettingsOutlinedIcon className='uil uil-cog menu--icon' />
							<span className="menu--label">Setting</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
  )
}



export default Sidebar
