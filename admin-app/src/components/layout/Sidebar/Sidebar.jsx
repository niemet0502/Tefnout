import React from 'react'
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types"

//icons 
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function Sidebar({user}) {
  return (
    <nav className="vertical_nav">
		<div className="left_section menu_left" id="js-menu" >
			<div className="left_section">
				<ul>
					<li className="menu--item">
						<NavLink to="/dashboard" className="menu--link d-flex align-items-center">
              <DashboardOutlinedIcon className="uil uil-apps menu--icon" />
							<span className="menu--label">Dashboard</span>
						</NavLink>
					</li>
					{ user.profil_id == 1 ? 
					<li className="menu--item">
					<NavLink to="/categories" className="menu--link d-flex align-items-center">
              <CategoryOutlinedIcon className="uil uil-apps menu--icon" />
							<span className="menu--label">Categories</span>
					</NavLink>
					</li> : 
					<li className="menu--item">
						<NavLink to="/new-course" className="menu--link d-flex align-items-center">
							<AddCircleOutlineOutlinedIcon className='uil uil-plus-circle menu--icon' />
							<span className="menu--label">Create Course</span>
						</NavLink>
					</li>
					}
					
					<li className="menu--item">
						<NavLink  to="/courses" className="menu--link d-flex align-items-center">
							<LibraryBooksOutlinedIcon className='uil uil-book-alt menu--icon' />
							<span className="menu--label">Courses</span>
						</NavLink>
					</li>
					{ user.profil_id == 1 ? 
						<>
							<li className="menu--item">
								<NavLink to="/users" className="menu--link d-flex align-items-center">
									<PeopleOutlineIcon className='uil uil-comments menu--icon' />
									<span className="menu--label">Users</span>
								</NavLink>
							</li> 
							<li className="menu--item">
								<NavLink to="/applications" className="menu--link d-flex align-items-center">
									<PersonAddAltIcon className='uil uil-comments menu--icon' />
									<span className="menu--label">Instructor Application</span>
								</NavLink>
							</li> 
						</>
						: ''
					}
					<li className="menu--item">
						<NavLink to="/reviews" className="menu--link d-flex align-items-center">
							<StarBorderOutlinedIcon className='uil uil-star menu--icon' />
							<span className="menu--label">Reviews</span>
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="left_section pt-2">
				<ul>
					<li className="menu--item">
						<NavLink to="/settings" className="menu--link d-flex align-items-center">
							<SettingsOutlinedIcon className='uil uil-cog menu--icon' />
							<span className="menu--label">Setting</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
  )
}

Sidebar.propTypes = {
	user: PropTypes.object
}



export default Sidebar
