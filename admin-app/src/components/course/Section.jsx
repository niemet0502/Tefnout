import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EditIcon from '@mui/icons-material/Edit';
import ReorderIcon from '@mui/icons-material/Reorder';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { convertFromHTML, convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { connect, useDispatch } from 'react-redux';
import useModal from '../../hooks/useModal';
import { deleteSection, storeChapter, updateChapter, updateSection } from '../../store/course/course.actions';
import Button from "../common/Button";
import Modal from "../common/Modal";
import FormInput from '../form/FormInput';
import Chapter from './Chapter';


const Section = ({id,title,chapters,courseId}) => { 
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const [state, setstate] = useState(title)
  const [chapterTitle, setChapterTitle] = useState('')
  const [showEditForm, setShowEditForm] = useState(false)
  const [selectedTab, setSelectedTab] = useState(false)
  const [video, setVideo] = useState(null)
  const [error, setError] = useState({})
  const [chapterErrors, setChapterErrors] = useState({})
  const [editedChapter, setEditedChapter] = useState({id: null})
  const dispatch = useDispatch()
  const onDelete = useCallback(() => {
      dispatch(deleteSection(id,courseId))
    },[dispatch])
  
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const handleSubmitSection = e => {
    e.preventDefault()
    let err = {}

    if(!state){
      err.title ="Entrez un titre"
    }
    setError(err)
    if( Object.getOwnPropertyNames(err).length == 0){
    dispatch(updateSection(state,courseId,id))

    setShowEditForm(!showEditForm) }
  }

  const handleSubmit = e => {
    e.preventDefault()
    let err = {}

    if(!chapterTitle){
      err.title ="Entrez un titre"
    }

    const textContent = (convertToHTML(editorState.getCurrentContent()))

    if(textContent === "<p></p>"){
      err.textContent ="Entrez le contenu du chapitre"
    }
    setChapterErrors(err)
    if(Object.getOwnPropertyNames(err).length === 0){
      dispatch(storeChapter(chapterTitle,textContent,courseId,id))
      setChapterTitle('')
      setEditorState(() => EditorState.createEmpty())
      toggleLoginForm()
      setChapterErrors({})
    }
  }
  
  const handleUpdateChapter = e => {
    e.preventDefault()
    const textContent = (convertToHTML(editorState.getCurrentContent()))
    dispatch(updateChapter(chapterTitle, editedChapter.id, courseId, textContent))
    setChapterTitle('')
    setEditorState(() => EditorState.createEmpty())
    toggleLoginForm()
    setEditedChapter({id: null})
  }

  useEffect(() => {
    if (editedChapter.id  !== null ){
      setChapterTitle(editedChapter.chapter_title);
      setEditorState(EditorState.createWithContent(convertFromHTML(editedChapter.chapter_text_content)))
      toggleLoginForm();
    }

  }, [editedChapter])

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
                error={error.title}
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
        {chapters.map(chapter => ( 
         <Chapter
            key={chapter.id}
            id={chapter.id}
            title={chapter.chapter_title}
            textContent={chapter.chapter_text_content}
            videoContent={chapter.chapter_video_content}
            handleClick={() => setEditedChapter(chapter)}
          />
        ))}
      </div>
      <div className="section-add-item-wrap p-3">
        <button className="add_lecture d-flex align-items-center" data-toggle="modal" onClick={() => toggleLoginForm()} > <AddBoxIcon /> <span className="mr-2" style={{marginLeft: '8px'}}>Chapter</span></button>
      </div>


      <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title={ editedChapter.id !== null ?  "Edit Chapter" : "New Chapter"}
          classNames="chapter-modal"
        >

          <div className="nav nav-pills d-flex ">
            <a href="#!" onClick={() => setSelectedTab(!selectedTab)} className={"nav-linkk " + (selectedTab == false ? "active": null)}><DescriptionOutlinedIcon /> Basic</a>
            <a href="#!" onClick={() => setSelectedTab(!selectedTab)} className={"nav-linkk " + (selectedTab ? "active": null)}> <VideoCallOutlinedIcon /> Video</a>
          </div>

          <form onSubmit={ editedChapter.id !== null ? handleUpdateChapter  :  handleSubmit}>
            <div 
              className={"basic-chapter-container " + 
                (selectedTab == false ? "d-block" : "d-none")}>
              <div className="ui search focus mt-2">
                <div className="ui left icon input swdh95">
                <FormInput
                  name="label"
                  type="text"
                  value={chapterTitle}
                  onChange={(e) => setChapterTitle(e.target.value)}
                  className="prompt srch_explore"
                  label="Title*"
                  error={chapterErrors.title}
                  required
                  />
                </div>
              </div>

              <div className="col-md-12">

              <label htmlFor="" className="label mt-3 mb-3">Content*</label>
              
              <Editor 
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />

              {chapterErrors.textContent && <>
                <hr style={{color: 'red', marginBottom: '0px'}} />
                <span style={{color: 'red'}}>Entrez le contenu</span>
              </>}
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
                  text="Cancel"
                  variant="secondary"
                  handleClick={toggleLoginForm}
                /> 
                <Button
                  text="Register"
                  classNames="mr-0"
                  type="submit"
                />
              </div>
          </form>
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
