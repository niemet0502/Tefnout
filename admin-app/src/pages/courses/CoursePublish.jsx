import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { connect } from 'react-redux';
import PropTypes from "prop-types"
import { CourseContentIsValid } from '../../utils/helpers';
const CoursePublish = ({
  currentNewCourse
}) => {
  return (
    <div>
      <div className="title-icon">
        <h3 className="title">Publier</h3>
      </div>
      <div className="publish-block">
        <EditIcon/>

        {CourseContentIsValid(currentNewCourse) == true ?
          <p>
          Votre cours est à l&apos;état de brouillon. Les étudiants ne peuvent pas le voir, 
          ni s&apos;inscrire à ce cours. Le cours apparaitra quand meme dans les statistique de l&apos;Administrateur. <br />
          Si vous voulez le rendre disponible pour les etudiants vous pouvez cliquer sur le bouton publier</p>
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
