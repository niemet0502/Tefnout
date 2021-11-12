import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ReorderIcon from '@mui/icons-material/Reorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Chapter from './Chapter';
const Section = () => {
  return (
    <div className="added-section-item mb-30">
      <div className="section-header">
        <h4><ReorderIcon /> Section 1 - Mettez en forme vos pages avec CSS</h4>
        <div className="section-edit-options">
          <button className="btn-152" type="button" data-toggle="collapse" data-target="#edit-section"><EditIcon /></button>
          <button className="btn-152" type="button"><DeleteIcon /></button>
        </div>
      </div>
      <div id="edit-section" className="collapse">
        <div className="new-section smt-25">
          <div className="form_group">
            <div className="ui search focus mt-30 lbel25">
              <label>Section Name*</label>
              <div className="ui left icon input swdh19">
                <input className="prompt srch_explore" type="text" placeholder="" name="title"  value="Introduction" />															
              </div>
            </div>
          </div>
          <div className="share-submit-btns pl-0">
            <button className="main-btn color btn-hover"><i className="fas fa-save mr-2"></i>Update Section</button>
          </div>
        </div>
      </div>
      <div className="section-group-list sortable">
        <Chapter title="1. Mettez en place le CSS" />
        <Chapter title="2. Créez des bordures et des ombres" />
      </div>
      <div className="section-add-item-wrap p-3">
        <button className="add_lecture d-flex align-items-center" data-toggle="modal" data-target="#add_lecture_model"> <AddBoxIcon /> <span className="mr-2" style={{marginLeft: '8px'}}>Chapitre</span></button>
      </div>
    </div>
  )
}

export default Section