import React from 'react'
import imgg from "../../assets/img/thumbnail-demo.jpg"
const CourseMedia = () => {
  return (
    <div>
      <div className="title-icon">
        <h3 className="title">Media</h3>
      </div>

      <div className="thumbnail-into">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <label className="label25 text-left mb-4">Image du cours*</label>
            <div className="thumb-item">
              <img src={imgg} alt="" />
              <div className="thumb-dt pb-3">													
                <div className="upload-btn mt-4">													
                  <input className="uploadBtn-main-input" type="file" id="ThumbFile__input--source" />
                  <label  title="Zip">Selectionnez une image</label>
                </div>
                <span className="uploadBtn-main-file mb-4">Taille: 590x300 pixels. Supports: jpg,jpeg, ou png</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 col-md-12">
          <div className="upload-file-dt mt-30">
            <div className="upload-btn">													
              <input className="uploadBtn-main-input" type="file" id="IntroFile__input--source" />
              <label title="Zip">Selectionnez une Video</label>
            </div>
            <span className="uploadBtn-main-file"> Format: .mp4</span>
            <span className="uploaded-id"></span>
          </div>
        </div>														
      </div>
    </div>
  )
}

export default CourseMedia
