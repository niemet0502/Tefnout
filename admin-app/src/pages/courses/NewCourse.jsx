import React, { useEffect, useState } from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import CourseInformation from "./CourseInformation";
import CourseContent from './CourseContent';
import CourseMedia from './CourseMedia';
import CoursePublish from './CoursePublish';
import Button from "../../components/common/Button"
function NewCourse() {
  const [currentStep, setCurrentStep] = useState(1)


  const handleStep = () => {
    switch (currentStep) {
      case 1:
        return <CourseInformation />
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
  

  return (
    <div className="wrap-content">
      <div className="container-fluid">
        <h6 className="page-title"> <AddCircleOutlineOutlinedIcon /> <span>Nouveau cours</span></h6>

        <div className="steps_container step-app mt-5" id="add-course-tab">
          <ul className="step-steps">
            <li className={"" + (currentStep > 1 ? "done" : '') +  " " + (currentStep == 1 ? "active" : '')}>
              <a href="#!" onClick={() => setCurrentStep(1)}>
                <span className="number"></span>
                <span className="step-name">Informations</span>
              </a>
            </li>
            <li className={"" + (currentStep > 2 ? "done" : '') +  " " + (currentStep == 2 ? "active" : '')}>
              <a href="#!" onClick={() => setCurrentStep(2)}>
                <span className="number"></span>
                <span className="step-name">Contenu</span>
              </a>
            </li>
            <li className={"" + (currentStep > 3 ? "done" : '') +  " " + (currentStep == 3 ? "active" : '')}>
              <a href="#!" onClick={() => setCurrentStep(3)}>
                <span className="number"></span>
                <span className="step-name">Media</span>
              </a>
            </li>
            <li className={" " + (currentStep == 4 ? "active" : '')}>
              <a href="#!" onClick={() => setCurrentStep(4)}>
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
  
          <Button text={currentStep == 4 ? "Publier": "Suivant"} handleClick={() => setCurrentStep(currentStep + 1)} />
        </div>   
        </div> 
      </div>
    </div>
  )
}

export default NewCourse
