import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types"
import * as actions from "../../store/courses/courses.actions";
import useModal from "../../hooks/useModal";
//components 
import PageHeader from '../../components/common/PageHeader';
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
//icons 
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
function Courses({user, dispatch,courses}) {
  const [course, setCourse] = useState({id: null, title: ""})
  const { isShowing: isDeleteModalShowed, toggle: toggleDeleteModal } = useModal();

  const deleteAction = course => {
    setCourse({id: course.id, title: course.title})
    toggleDeleteModal()
  }

  const handleDelete = () => {
    dispatch(actions.removeCourse(course.id))
    toggleDeleteModal()
  }

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
            <Link to="/new-course">
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
            <th className="text-center" scope="col">Chapters</th>
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
              <td className="text-center">  { course.chapter_count}</td>
              <td className="text-center"> <b className="course_active">{ course.status}</b> </td>
              <td className="text-center">
                {user.profil_id == 1 ? '': <Link to={`/edit-course/${course.slug}`}> <EditOutlinedIcon className="uil text-black" /></Link>}
                {course.follow_courses_count > 0 ? '' :  <DeleteOutlineOutlinedIcon onClick={() => deleteAction(course)} className="uil"/>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <Modal
          isShowing={isDeleteModalShowed}
          hide={toggleDeleteModal}
          title="Delete confirmation" 
        >
          <p className="mt-2 text-bold"> <strong>You are deleting &quot; {course.title} &quot; course</strong> <br />
          do you want to confirm? </p>

          <div className="d-flex align-items-center justify-content-end">
            <Button 
              classNames="modal-toggle" 
              handleClick={toggleDeleteModal} 
              text="Cancel"
              variant="secondary"
            /> 
          <Button 
            classNames="modal-toggle ml-3" 
            handleClick={handleDelete} 
            text="Delete"
          /> 
          </div>
        </Modal>
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
