import React, { useEffect, useState } from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import CourseInformation from "./CourseInformation";
import CourseContent from './CourseContent';
import CourseMedia from './CourseMedia';
import CoursePublish from './CoursePublish';
import Button from "../../components/common/Button";
import { convertToHTML } from 'draft-convert';
import { storeCourse } from '../../store/course/course.actions';
import { useDispatch, connect } from 'react-redux';
import PropTypes from "prop-types"
function NewCourse({currentUser}) {
  const dispatch = useDispatch()
  const [currentStep, setCurrentStep] = useState(1)
  const [newCourse, setNewCourse] = useState({title: "", hours: "", 
                                  description: "", topics: "",
                                  category_id: 3,level: "Debutant"})

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
      dispatch(storeCourse(newCourse,description,currentUser));
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
  
          <Button text={currentStep == 4 ? "Publier": "Suivant"} handleClick={() => changeStep()} />
        </div>   
        </div> 
      </div>
    </div>
  )
}

NewCourse.propTypes = {
  currentUser: PropTypes.number
}

const mapStateToProps = state => {
  return {
    currentUser: state.authentication.user.id
  }
}

export default connect(mapStateToProps)(NewCourse)
