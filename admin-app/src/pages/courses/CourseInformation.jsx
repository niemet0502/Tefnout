import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import FormInput from '../../components/form/FormInput';
import FormSelect from '../../components/form/FormSelect';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/categories/categories.actions';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const CourseInformation = ({
  categories,
  course,
  handleChange
}) => {
  const dispatch = useDispatch()
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  useEffect(() => {
    handleChange({...course,description: editorState})
  }, [editorState])

  return (
    <div>
      <div className="title-icon">
        <h3 className="title">Informations de base</h3>
      </div>

      <div className="course__form p-4">
        <form action="">
        <div className="ui left icon input swdh11 swdh19">
          <FormInput
            name="name"
            type="text"
            label="Titre*"
            value={course.title}
            onChange={(e) => handleChange({...course,title:  e.target.value})}
            placeholder="titre du cours..."
            className="prompt srch_explore"
            required
          />   
        </div>
        <div className="col-md-12 mt-2">
          <label htmlFor="" className="label">Description</label>
          <Editor 
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
          </div>
        <div className="row">
          <div className="col-md-6">
            <div className="ui left icon input swdh11 swdh19">
            <FormInput
              name="Duree"
              type="text"
              label="Duree*"
              value={course.hours}
              onChange={(e) => handleChange({...course,hours:  e.target.value})}
              placeholder="duree du cours..."
              className="prompt srch_explore"
              required
            />   
            </div>
          </div>
          <div className="col-md-6">
          <div className="ui left icon input swdh11 swdh19">
            <FormInput
              name="topics"
              type="text"
              label="Topics*"
              value={course.topics}
              onChange={(e) => handleChange({...course,topics:  e.target.value})}
              placeholder="topics..."
              className="prompt srch_explore"
              required
            />   
          </div>
          </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6">
              <div className="ui search focus mt-2 ">
              <div className="ui left icon input swdh95" style={{marginRight: '20px'}}>
                <FormSelect
                  name="categorie"
                  label="Categorie"
                  options={categories}
                  value={course.category_id}
                  onChange={(e) => handleChange({...course, category_id: e.target.value})}
                />
              </div>
              </div>

            </div>
            <div className="col-md-6">
              <div className="ui search focus mt-2 ">
                <div className="ui left icon input swdh95" style={{marginRight: '20px'}}>
                <FormSelect
                  name="niveau"
                  label="Niveau" 
                  options={niveaux}
                  value={course.level}
                  onChange={(e) => handleChange({...course, level: e.target.value})}
                />
                </div>
              </div>

            </div>
          </div>
        </form> 													
      </div>
    </div>
  )
}

CourseInformation.propTypes = {
  categories: PropTypes.array,
  course: PropTypes.object,
  handleChange: PropTypes.func
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories
  }
}

const niveaux = [
  {
    id: 1,
    name: "Debutant"
  },
  {
    id: 2,
    name: "Moyen"
  },
  {
    id: 3,
    name: "Difficile"
  }
]

export default connect(mapStateToProps)(CourseInformation)
