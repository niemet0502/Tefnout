import React, { useCallback, useEffect, useState } from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import CourseInformation from "./CourseInformation";
import CourseContent from './CourseContent';
import CourseMedia from './CourseMedia';
import CoursePublish from './CoursePublish';
import Button from "../../components/common/Button";
import { convertToHTML } from 'draft-convert';
import { storeCourse, updateCourse,publishCourse } from '../../store/course/course.actions';
import { useDispatch, connect } from 'react-redux';
import PropTypes from "prop-types";
import { CourseContentIsValid } from '../../utils/helpers';
function NewCourse({currentUser,courseId,currentCourseContent,courseStatus}) {
  const dispatch = useDispatch()
  const [hasNewCourse, setHasNewCourse] = useState(true)
  const [currentStep, setCurrentStep] = useState(1)
  const [newCourse, setNewCourse] = useState({title: "Creer une application android", hours: "3 heures", 
                                  description: "", topics: "android java kotlin",
                                  category_id: 3,level: "Debutant"})
  const handlePublish = useCallback(
    (courseId) => {
      console.log(courseId);
      dispatch(publishCourse(courseId))
    },
    [dispatch])

  const handleStep = () => {
    switch (currentStep) {
      case 1:
        return <CourseInformation course={newCourse} handleChange={setNewCourse} />
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
    if(currentStep == 1){
      let description = (convertToHTML(newCourse.description.getCurrentContent()));
        
        if(hasNewCourse == true){
          dispatch(storeCourse(newCourse,description,currentUser));
          setHasNewCourse(false)
        }else{
          console.log(courseId);
          dispatch(updateCourse(newCourse,courseId))
        }
    }
    setCurrentStep(currentStep + 1)
  }

  return (
    <div className="wrap-content">
      <div className="container-fluid">
        <h6 className="page-title"> <AddCircleOutlineOutlinedIcon /> <span>Nouveau cours</span></h6>

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
            courseStatus === "Publier" ? null :  CourseContentIsValid(currentCourseContent) ? <Button text="Publier" handleClick={ () => handlePublish(courseId)} /> : null }            
        </div>   
        </div> 
      </div>
    </div>
  )
}

NewCourse.propTypes = {
  currentUser: PropTypes.number,
  courseId: PropTypes.number,
  currentCourseContent: PropTypes.array,
  courseStatus: PropTypes.string
}

const mapStateToProps = state => {
  return {
    currentUser: state.authentication.user.id,
    courseId: state.course.currentCourse.id,
    courseStatus: state.course.currentCourse.status,
    currentCourseContent: state.course.currentCourseContent
  }
}

export default connect(mapStateToProps)(NewCourse)
