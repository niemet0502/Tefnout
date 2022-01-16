import EditIcon from '@mui/icons-material/Edit';
import PropTypes from "prop-types";
import React from 'react';
import { connect } from 'react-redux';
import { CourseContentIsValid } from '../../utils/helpers';
const CoursePublish = ({
  currentNewCourse
}) => {
  return (
    <div>
      <div className="title-icon">
        <h3 className="title">Publish</h3>
      </div>
      <div className="publish-block">
        <EditIcon/>

        {CourseContentIsValid(currentNewCourse) == true ?
          <p>
         Your course is in a draft state. Students cannot view, purchase or enroll in this course. For students that are already enrolled, this course will not appear on their student Dashboard.</p>
        : 
        <p>
          Le contenu de votre cours est invalide vous ne pouvez pas le publier. <br />
          Veuillez mettre a jour le contenu du cours
        </p>

        }

      </div>

      
    </div>
  )
}

CoursePublish.propTypes = {
  currentNewCourse: PropTypes.object
}

const mapStateToProps = state => {
  return{
    currentNewCourse: state.course.currentCourseContent
  }
}

export default connect(mapStateToProps)(CoursePublish)
