import React from 'react'
import { Link } from 'react-router-dom';

//icons 
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
function Sidebar() {
  return (
    <nav className="vertical_nav">
		<div className="left_section menu_left" id="js-menu" >
			<div className="left_section">
				<ul>
					<li className="menu--item">
						<Link to="/dashboard" className="menu--link d-flex align-items-center">
              <DashboardOutlinedIcon className="uil uil-apps menu--icon" />
							<span className="menu--label">Dashboard</span>
						</Link>
					</li>
					<li className="menu--item">
					<Link to="/categories" className="menu--link d-flex align-items-center">
              <CategoryOutlinedIcon className="uil uil-apps menu--icon" />
							<span className="menu--label">Categories</span>
					</Link>
					</li>
					<li className="menu--item">
						<Link to="/courses/new" className="menu--link d-flex align-items-center">
							<AddCircleOutlineOutlinedIcon className='uil uil-plus-circle menu--icon' />
							<span className="menu--label">Create Course</span>
						</Link>
					</li>
					<li className="menu--item">
						<Link  to="/courses" className="menu--link d-flex align-items-center">
							<LibraryBooksOutlinedIcon className='uil uil-book-alt menu--icon' />
							<span className="menu--label">Courses</span>
						</Link>
					</li>

					<li className="menu--item">
						<Link to="/users" className="menu--link d-flex align-items-center">
							<PeopleOutlineIcon className='uil uil-comments menu--icon' />
							<span className="menu--label">Users</span>
						</Link>
					</li>
					<li className="menu--item">
						<Link to="/reviews" className="menu--link active d-flex align-items-center">
							<StarBorderOutlinedIcon className='uil uil-star menu--icon' />
							<span className="menu--label">Reviews</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="left_section pt-2">
				<ul>
					<li className="menu--item">
						<Link to="/settings" className="menu--link d-flex align-items-center">
							<SettingsOutlinedIcon className='uil uil-cog menu--icon' />
							<span className="menu--label">Setting</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
  )
}



export default Sidebar
