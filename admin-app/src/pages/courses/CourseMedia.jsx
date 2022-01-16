import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import imgg from "../../assets/img/thumbnail-demo.jpg";
import { updateCourse } from "../../store/course/course.actions";
import { getBase64 } from '../../utils/convertFile';
const CourseMedia = ({image,courseId}) => {
  const [courseImage, setCourseImage] = useState(image)
  const dispatch = useDispatch()

  useEffect(() => {
    if(courseImage !== null && typeof courseImage !== 'string'){
      convertCourseImage()
    }
  }, [courseImage])

  async function convertCourseImage(){
    let image = await getBase64(courseImage);
    setCourseImage(image)

    dispatch(updateCourse({image},courseId))
  }

  return (
    <div>
      <div className="title-icon">
        <h3 className="title">Media</h3>
      </div>

      <div className="thumbnail-into">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <label className="label25 text-left mb-4">Thumbnail*</label>
            <div className="thumb-item course-thum-item">
              {courseImage == null ? <img src={imgg} alt="" style={{width: '100%', height: '250px'}}/> 
                : typeof courseImage === 'string' ? 
                <img src={courseImage} alt=""style={{width: '100%', height: '250px'}} /> 
                : <img src={imgg} alt="" style={{width: '100%', height: '250px'}}/>} 
              <div className="thumb-dt pb-3">													
                <div className="upload-btn mt-4">													
                  <input className="uploadBtn-main-input" type="file" id="ThumbFile__input" onChange={(e) => setCourseImage(e.target.files[0])} />
                  <label  title="Zip" htmlFor="ThumbFile__input">Choose Thumbnail</label>
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
              <label title="Zip">Upload Video</label>
            </div>
            <span className="uploadBtn-main-file"> Format: .mp4</span>
            <span className="uploaded-id"></span>
          </div>
        </div>														
      </div>
    </div>
  )
}

CourseMedia.propTypes = {
  image: PropTypes.any,
  courseId: PropTypes.number
}

const mapStateToProps = state => {
  return{
    image: state.course.currentCourse.image,
    courseId: state.course.currentCourse.id
  }
}

export default connect(mapStateToProps)(CourseMedia)
