import React, { useCallback, useState } from 'react'
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
import { updateSection,deleteSection } from '../../store/course/course.actions';
import { useDispatch, connect } from 'react-redux';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const Section = ({id,title,chapters,courseId}) => { 
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const [state, setstate] = useState(title)
  const [showEditForm, setShowEditForm] = useState(false)
  const [selectedTab, setSelectedTab] = useState(false)
  const dispatch = useDispatch()
  const onDelete = useCallback(() => {
      dispatch(deleteSection(id,courseId))
    },[dispatch])
  
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const handleSubmitSection = e => {
    e.preventDefault()
    dispatch(updateSection(state,courseId,id))

    setShowEditForm(!showEditForm)
  }

  return (
    <div className="added-section-item mb-30">
      <div className="section-header">
        <h4><ReorderIcon /> {title}</h4>
        <div className="section-edit-options">
          <button className="btn-152" type="button" onClick={() => setShowEditForm(!showEditForm)} ><EditIcon /></button>
          <button className="btn-152" type="button" onClick={onDelete}><DeleteIcon /></button>
        </div>
      </div>
      
      {showEditForm && 
      <div id="edit-section" className="m-4 mb-1">
        <form onSubmit={handleSubmitSection}>
          <div className="new-section smt-25">
            <div className="form_group">
            <div className="ui left icon input swdh95">
              <FormInput
                name="label"
                type="text"
                value={state}
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
        </form>
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
          classNames="chapter-modal"
        >

          <div className="nav nav-pills d-flex ">
            <a href="#!" onClick={() => setSelectedTab(!selectedTab)} className={"nav-linkk " + (selectedTab == false ? "active": null)}><DescriptionOutlinedIcon /> Basique</a>
            <a href="#!" onClick={() => setSelectedTab(!selectedTab)} className={"nav-linkk " + (selectedTab ? "active": null)}> <VideoCallOutlinedIcon /> Video</a>
          </div>

          <div 
            className={"basic-chapter-container " + 
              (selectedTab == false ? "d-block" : "d-none")}>
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

            <div className="col-md-12">

            <label htmlFor="" className="label mt-3 mb-3">Contenu*</label>
            
            <Editor 
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
            />
            </div>
          </div>

          <div  style={{height: '270px'}}
            className={"chapter-video-container justify-content-center mt-3 " +
            (selectedTab  ? "d-flex" : "d-none")}>
            <div className="col-md-8 align-items-center ">
              <div className="upload-file-dt mt-30" style={{height: '80%'}}>
                <div className="upload-btn">													
                  <input className="uploadBtn-main-input" type="file" id="IntroFile__input--source" />
                  <label title="Zip">Selectionnez une Video</label>
                </div>
                <span className="uploadBtn-main-file"> Format: .mp4</span>
                <span className="uploaded-id"></span>
              </div>

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
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  chapters: PropTypes.array,
  courseId: PropTypes.number
}
const mapStateToProps = state => {
  return{
    courseId: state.course.currentCourse.id
  }
}
export default connect(mapStateToProps)(Section)
