import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types"
//components 
import PageHeader from '../../components/common/PageHeader';
import Button from "../../components/common/Button"
//icons 
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
function Courses({user, dispatch}) {
  return (
    <div className="wrap-content">
      <div className="container-fluid">
        <h6 className="page-title"> <LibraryBooksOutlinedIcon /> <span>Courses</span></h6>

        { user.profil_id == 1 ? '' : 
        <PageHeader 
          Icon={LibraryBooksOutlinedIcon} 
          text="Course"
          > 
            <Link to="/courses/new">
              <Button 
                text="Create Your Course"
              /> 
            </Link>
        </PageHeader>
        }
      </div>
    </div>
  )
}
Courses.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func
} 

const mapStateToProps = state => {
  return{
    user: state.authentication.user
  }
}

export default connect(mapStateToProps)(Courses)
