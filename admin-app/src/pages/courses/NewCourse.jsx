import React, { useCallback, useEffect, useState } from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import CourseInformation from "./CourseInformation";
import CourseContent from './CourseContent';
import CourseMedia from './CourseMedia';
import CoursePublish from './CoursePublish';
import Button from "../../components/common/Button";
import { convertToHTML } from 'draft-convert';
import { storeCourse, updateCourse,publishCourse, fetchCourse, getCurrentCourse } from '../../store/course/course.actions';
import { useDispatch, connect } from 'react-redux';
import PropTypes from "prop-types";
import { CourseContentIsValid } from '../../utils/helpers';
function NewCourse({
    currentUser,
    course,
    currentCourseContent,
    // courseStatus,
    match}) {
  const dispatch = useDispatch()
  const [hasNewCourse, setHasNewCourse] = useState(true)
  const [isEditCourse, setIsEditCourse] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [newCourse, setNewCourse] = useState({title: "Creer une application angular", hours: "3 heurs", 
                                  description: "", topics: "angular frontend",
                                  category_id: 3,level: "Debutant"})
  const [errors, setErrors] = useState({})
  const handlePublish = useCallback(
    (course) => {
      dispatch(publishCourse(course.id))
    },
    [dispatch])

  const handleStep = () => {
    switch (currentStep) {
      case 1:
        return <CourseInformation 
          course={newCourse} handleChange={setNewCourse}
          errors={errors} />
      case 2:
        return <CourseContent />
      case 3: 
        return <CourseMedia />
      case 4: 
       return <CoursePublish />
      default:
        <CourseInformation />
    }
  }

  const changeStep = () => {
    let err = {}
    if(newCourse.title === ''){
      err.title = "Entrez un titre"
    }

    if(newCourse.hours === ''){
      err.hours = "Entrez une duree"
    }

    if(newCourse.topics === ''){
      err.topics = "Entrez des topics"
    }
    setErrors(err)
    if(Object.getOwnPropertyNames(err).length === 0){
      if(currentStep == 1){
        
        if(hasNewCourse == true){
            let description = (convertToHTML(newCourse.description.getCurrentContent()));
            dispatch(storeCourse(newCourse,description,currentUser));
            setHasNewCourse(false)
          }else{
            dispatch(updateCourse(newCourse,course.id))
          }
      }
      setCurrentStep(currentStep + 1)
    }

  }

  useEffect(() => {
    const { slug } = match.params
    if(slug){
      setHasNewCourse(false)
      setIsEditCourse(true)
      dispatch(fetchCourse(slug))
    }

    return () => {
      dispatch(getCurrentCourse([]))
    }
  }, [match, dispatch])

  useEffect(() => {
    if (isEditCourse){
      setNewCourse(course)
    }
  }, [course])

  return (
    <div className="wrap-content">
      <div className="container-fluid">
        <h6 className="page-title"> <AddCircleOutlineOutlinedIcon /> <span> {isEditCourse ? 'Modifier le cours' : 'Nouveau cours'} </span></h6>

        <div className="steps_container step-app mt-5" id="add-course-tab">
          <ul className="step-steps">
            <li className={"" + (currentStep > 1 ? "done" : '') +  " " + (currentStep == 1 ? "active" : '')}>
              <a href="#!">
                <span className="number"></span>
                <span className="step-name">Informations</span>
              </a>
            </li>
            <li className={"" + (currentStep > 2 ? "done" : '') +  " " + (currentStep == 2 ? "active" : '')}>
              <a href="#!">
                <span className="number"></span>
                <span className="step-name">Contenu</span>
              </a>
            </li>
            <li className={"" + (currentStep > 3 ? "done" : '') +  " " + (currentStep == 3 ? "active" : '')}>
              <a href="#!">
                <span className="number"></span>
                <span className="step-name">Media</span>
              </a>
            </li>
            <li className={" " + (currentStep == 4 ? "active" : '')}>
              <a href="#!">
                <span className="number"></span>
                <span className="step-name">Publier</span>
              </a>
            </li>
          </ul>
        <div className="form-step-content mt-5">
          {handleStep()}
        </div>    
        <div className="step-footer step-tab-pager">
          { currentStep > 1 ? <Button text="Precedent" handleClick={() => setCurrentStep(currentStep - 1)} /> : null}
          
          {currentStep < 4 ? 
            <Button text="Suivant" handleClick={() => changeStep()} /> : 
            course.status === "Publier" ? null :  CourseContentIsValid(currentCourseContent) ? <Button text="Publier" handleClick={ () => handlePublish(course.id)} /> : null }            
        </div>   
        </div> 
      </div>
    </div>
  )
}

NewCourse.propTypes = {
  currentUser: PropTypes.number,
  currentCourseContent: PropTypes.array,
  course: PropTypes.object,
  match: PropTypes.object
}

const mapStateToProps = state => {
  return {
    currentUser: state.authentication.user.id,
    course: state.course.currentCourse,
    currentCourseContent: state.course.currentCourseContent
  }
}

export default connect(mapStateToProps)(NewCourse)
