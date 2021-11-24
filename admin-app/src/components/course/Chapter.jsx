import React, { useCallback, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import PropTypes from "prop-types";
import { connect, useDispatch } from 'react-redux';
import { deleteChapter } from '../../store/course/course.actions';
import { courseIdSelector } from '../../store/course/course.selectors';

const Chapter = ({title,textContent,videoContent, id, courseId, handleClick}) => {
  const dispatch = useDispatch()
  const onDelete = useCallback(() => {
    dispatch(deleteChapter(id,courseId))
  },[dispatch],)

  return (
    <div className="section-list-item">
      <div className="section-item-title">
        <DescriptionIcon />
        <span className="section-item-title-text ">Chapitre {title}</span>
      </div>
      <button type="button" className="section-item-tools"><EditIcon onClick={handleClick} /></button>
      <button type="button" className="section-item-tools" onClick={onDelete} ><DeleteIcon /></button>
      <button type="button" className="section-item-tools ml-auto"><i className="fas fa-bars"></i></button>
    </div>
  )
}

Chapter.propTypes = {
  title: PropTypes.string.isRequired,
  textContent: PropTypes.any,
  videoContent: PropTypes.any,
  id: PropTypes.number,
  courseId: PropTypes.number,
  handleClick: PropTypes.func
}

const mapStateToProps = state => {
  return {
    courseId: state.course.currentCourse.id
  }
}
export default connect(mapStateToProps)(Chapter)
