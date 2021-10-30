import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ReorderIcon from '@mui/icons-material/Reorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SubjectIcon from '@mui/icons-material/Subject';
import DescriptionIcon from '@mui/icons-material/Description';
import PropTypes from "prop-types"

const Chapter = ({title}) => {
  return (
    <div className="section-list-item">
      <div className="section-item-title">
        <DescriptionIcon />
        <span className="section-item-title-text ">Chapitre {title}</span>
      </div>
      <button type="button" className="section-item-tools"><EditIcon /></button>
      <button type="button" className="section-item-tools"><DeleteIcon /></button>
      <button type="button" className="section-item-tools ml-auto"><i className="fas fa-bars"></i></button>
    </div>
  )
}

Chapter.propTypes = {
  title: PropTypes.string.isRequired
}
export default Chapter
