import React, { useEffect, useState } from 'react'
import PageHeader from "../../components/common/PageHeader"
import Button from "../../components/common/Button";
import Section from "../../components/course/Section";
import { connect, useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { fetchCourseContent, storeSection } from '../../store/course/course.actions';
import useModal from '../../hooks/useModal';
import Modal from "../../components/common/Modal"
import FormInput from '../../components/form/FormInput';
const CourseContent = ({courseContent,courseId}) => {
  const dispatch = useDispatch()
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const [state, setState] = useState('')

  useEffect(() => {
    dispatch(fetchCourseContent(courseId.id))
  }, [courseId])

  const handleSubmitSection = (e) => {
    e.preventDefault()
    dispatch(storeSection(state,courseId.id))
    toggleLoginForm()
    setState('')
  }
  return (
    <div>
      <div className="title-icon">
        <h3 className="title">Contenu</h3>
      </div>

      <PageHeader
          text="Contenu"
          > 
          <Button 
            text="Nouvelle Section"
            handleClick={toggleLoginForm} 
          /> 
        </PageHeader>

      {courseContent.map(section => (
        <Section 
          key={section.id} 
          id={section.id}
          title={section.section_title} 
          chapters={section.chapters} 
        /> 
      ))}

      <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="Nouvelle Section"
        >
          <form onSubmit={handleSubmitSection}>
            
          <div className="ui search focus mt-2">
            <div className="ui left icon input swdh95">
            <FormInput
              name="label"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="prompt srch_explore"
              label="Titre"
              required
              />
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-end mt-4">
             <Button 
                classNames="modal-toggle" 
                text="Annuler"
                variant="secondary"
              /> 
              <Button
                text="Enregistrer"
                classNames="mr-0"
                type="submit"
              />
            </div>
          </form>
        </Modal>
    </div>
  )
}

CourseContent.propTypes = {
  courseContent: PropTypes.array,
  courseId: PropTypes.object
}

const mapStateToProps = state => {
  return{
    courseContent: state.course.currentCourseContent,
    courseId: state.course.currentCourse
  }
}

export default connect(mapStateToProps)(CourseContent)
