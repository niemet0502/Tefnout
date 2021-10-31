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
        <h6 className="page-title"> <LibraryBooksOutlinedIcon /> <span>Cours</span></h6>

        { user.profil_id == 1 ? '' : 
        <PageHeader 
          Icon={LibraryBooksOutlinedIcon} 
          text="Course"
          > 
            <Link to="/new-course">
              <Button 
                text="Nouveau cours"
              /> 
            </Link>
        </PageHeader>
        }

      <table className="table ucp-table mt-5">
        <thead className="thead-s">
          <tr>
            <th className="text-center" scope="col">Id</th>
            <th className="text-center" scope="col">Titre</th>
            {user.profil_id == 1 ? <th className="text-center" scope="col">Formateur</th> : ''}
            <th className="text-center" scope="col">Date de publication</th>
            <th className="text-center" scope="col">Formation(s)</th>
            <th className="text-center" scope="col">Categorie</th>
            <th className="text-center" scope="col">Chapitres</th>
            <th className="text-center" scope="col">Statut</th>
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
              <td className="text-center">  { course.chapters_count}</td>
              <td className="text-center"> <b className="course_active">{ course.status}</b> </td>
              <td className="text-center">
                {user.profil_id == 1 ? '': <EditOutlinedIcon  className="uil" />}
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
          title="confirmation de suppression" 
        >
          <p className="mt-2 text-bold"> <strong>Vous etes sur le point de supprimer le cours &quot; {course.title} &quot;</strong> <br />
          voulez-vous confirmez ? </p>

          <div className="d-flex align-items-center justify-content-end">
            <Button 
              classNames="modal-toggle" 
              handleClick={toggleDeleteModal} 
              text="Annuler"
              variant="secondary"
            /> 
          <Button 
            classNames="modal-toggle ml-3" 
            handleClick={() => handleDelete} 
            text="Supprimer"
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
