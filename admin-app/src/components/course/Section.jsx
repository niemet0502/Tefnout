import React, { useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ReorderIcon from '@mui/icons-material/Reorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Chapter from './Chapter';
import PropTypes from "prop-types";
import Button from "../common/Button";
import Modal from "../common/Modal";
import useModal from '../../hooks/useModal';
import FormInput from '../form/FormInput';
import FormTextArea from "../form/FormTextArea";
const Section = ({title,chapters}) => { 
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const [state, setstate] = useState('')
  const [showEditForm, setShowEditForm] = useState(false)

  return (
    <div className="added-section-item mb-30">
      <div className="section-header">
        <h4><ReorderIcon /> {title}</h4>
        <div className="section-edit-options">
          <button className="btn-152" type="button" onClick={() => setShowEditForm(!showEditForm)} ><EditIcon /></button>
          <button className="btn-152" type="button"><DeleteIcon /></button>
        </div>
      </div>
      
      {showEditForm && 
      <div id="edit-section" className="m-4 mb-1">
        <div className="new-section smt-25">
          <div className="form_group">
          <div className="ui left icon input swdh95">
            <FormInput
              name="label"
              type="text"
              value={title}
              onChange={(e) => setstate(e.target.value)}
              className="prompt srch_explore"
              label="Titre"
              required
              />
            </div>
          </div>
          <div className="share-submit-btns pl-0 mt-3">
            <Button
              type="submit"
              text="Modifier section"
            />
          </div>
        </div>
      </div>
      }
      <div className="section-group-list sortable">
        {chapters.map(chapter => {
          <Chapter
            key={chapter.id}
            title={chapter.chapter_title}
            textContent={chapter.chapter_text_content}
            videoContent={chapter.chapter_video_content}
          />
        })}
      </div>
      <div className="section-add-item-wrap p-3">
        <button className="add_lecture d-flex align-items-center" data-toggle="modal" onClick={() => toggleLoginForm()} > <AddBoxIcon /> <span className="mr-2" style={{marginLeft: '8px'}}>Chapitre</span></button>
      </div>


      <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="Nouveau Chapitre"
        >

          <div className="ui search focus mt-2">
            <div className="ui left icon input swdh95">
            <FormInput
              name="label"
              type="text"
              value={state}
              onChange={(e) => setstate(e.target.value)}
              className="prompt srch_explore"
              label="Titre*"
              required
              />
            </div>
          </div>

          <div className="ui search focus mt-30">																
            <div className="ui form swdh30">
              <FormTextArea
                name="Contenu"
                value=""
                label="Contenu*"
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
              />
            </div>
        </Modal>
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  chapters: PropTypes.array
}

export default Section
