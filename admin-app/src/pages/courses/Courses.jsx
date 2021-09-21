import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types"
import * as actions from "../../store/courses/courses.actions"
//components 
import PageHeader from '../../components/common/PageHeader';
import Button from "../../components/common/Button"
//icons 
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
function Courses({user, dispatch,courses}) {

  useEffect(() => {
    if(user.profil_id == 1){
      dispatch(actions.fetchCourses())
    }else{
      dispatch(actions.fetchTeacherCourses(user.id))
    }
  }, [dispatch])
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

      <table className="table ucp-table mt-5">
        <thead className="thead-s">
          <tr>
            <th className="text-center" scope="col">Item No.</th>
            <th className="text-center" scope="col">Title</th>
            {user.profil_id == 1 ? <th className="text-center" scope="col">Instructor</th> : ''}
            <th className="text-center" scope="col">Publish date</th>
            <th className="text-center" scope="col">Training(s)</th>
            <th className="text-center" scope="col">Category</th>
            <th className="text-center" scope="col">Status</th>
            <th className="text-center" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td className="text-center">{ course.id}</td>
              <td className="text-center">{ course.title}</td>
              { user.profil_id == 1 ? <td className="text-center">{ course.user_name} { course.user_firstname}</td> : ''}
              <td className="text-center">{ course.created_at.substr(0,10)}</td>
              <td className="text-center">{ course.follow_courses_count}</td>
              <td className="text-center">  { course.category_name}</td>
              <td className="text-center"> <b className="course_active">{ course.status}</b> </td>
              <td className="text-center">
                {user.profil_id == 1 ? '': <EditOutlinedIcon  className="uil" />}
                {course.follow_courses_count > 0 ? '' :  <DeleteOutlineOutlinedIcon className="uil"/>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
Courses.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func,
  courses: PropTypes.array
} 

const mapStateToProps = state => {
  return{
    user: state.authentication.user,
    courses: state.courses.courses
  }
}

export default connect(mapStateToProps)(Courses)
