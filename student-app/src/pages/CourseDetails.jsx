import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { fetchCourse } from '../store/course/course.actions';
import { fetchUser } from '../store/user/user.actions';
import { fetchCourseReviews, addReview } from '../store/reviews/reviews.actions';
import { fetchCourseCurriculum } from '../store/curriculum/curriculum.actions';
import { trainingIsExist, cancelCurrentTraining } from '../store/formation/formation.actions';
import DOMPurify from 'dompurify';
//components 
import CourseBanner from '../components/Marketplace/Course/CourseBanner';
import Button from '../components/Marketplace/Button';
import Tabs from '../components/Marketplace/Tabs/Tabs';
import FormTextArea from '../components/Marketplace/Form/FormTextArea';

//images 
import cd_thumb from "../assets/img/cd_thumb.jpg"
import comment_01 from "../assets/img/comment_01.png"
import instructorImg from "../assets/img/instructor.jpg"
//icons 
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';
function CourseDetails({
  match,
  dispatch,
  course,
  user,
  reviews,
  token,
  curriculum,
  currentUser,
  currentTraining
}) {
  const renderTrainingButton = () => {
    const { slug } = match.params
    if (token == null || currentTraining == false){
      return (
         <Link to={`/training/${slug}`}>
            <Button 
            text="Commencer la formation"
            bgColorHover="#0073ff"
            Icon={ArrowRightAltIcon} />
         </Link>
      )
    }else{
      return (
        <div className="d-flex align-items-center justify-content-center" style={{flexDirection: 'column'}}>
          <Link to={`/training/${slug}`}>
            <Button 
            text="Continuer la formation"
            bgColorHover="#0073ff"
            Icon={ArrowRightAltIcon} />
          </Link>
          <span className="mt-3 cancel-formation" onClick={() => dispatch(cancelCurrentTraining(currentTraining.id))}>NE PLUS SUIVRE</span>
        </div>
        )
    }
  }
  const [newReview, setNewReview] = useState('')

  useEffect(() => {
    const { slug } = match.params
    
    dispatch(fetchCourse(slug))
  }, [dispatch, match])
  
  useEffect(() => {
    dispatch(fetchUser(course.teacher_id))
    dispatch(fetchCourseReviews(course.id))
    dispatch(fetchCourseCurriculum(course.id))
    dispatch(trainingIsExist(course.id,currentUser.id))
  }, [course])

  useEffect(() => {
    renderTrainingButton()
  }, [currentTraining])

  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(addReview(newReview,currentTraining.id, currentTraining.course_id))
    setNewReview('')
  }
  return (
    <CourseDetailsComponent>
      <CourseBanner
      title="Course Single"
      page="DETAILS" />
      <section className="course_details_area pt-5 pb-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="course_dtls_left mb-30 p-3 pb-4" style={{background: '#ffff'}}> 
                <div className="cd_thumb">
                  { course.image == null ? <img src={cd_thumb} alt="" style={{width: '100%'}} /> : 
                    <img src={course.image} alt="" style={{width: '100%'}} />}
                  
                </div>
                <div className="cd_content">
                    <div className="meta d-flex">
                        <div className="left ul_li d-flex">
                            <ul className="rating_star ul_li d-flex pl-0">
                                <li><StarIcon /></li>
                                <li><StarIcon /></li>
                                <li><StarIcon /></li>
                                <li><StarBorderIcon /></li>
                                <li><StarBorderIcon /></li>
                            </ul>
                            <div className="review">
                                <span>132 Reviews</span>
                            </div>
                        </div>
                        <div className="right ul_li">
                            <span className="ptice">{course.level}</span>
                        </div>
                    </div>
                    <h3 className="title">{course.title}</h3>
                    <div className="bottom">
                        <div className="left ul_li d-flex align-items-center">
                            <div className="">
                            { user.avatar == null ? <img src={cd_thumb} className="author" alt="" /> : 
                              <img src={user.avatar} alt="" className="author"  />}
                            </div>
                            <h4><span>By :</span> {user.name} {user.firstname} </h4>
                        </div> 
                        
                    </div>
                </div>
              <div className="cdl_bottom"> 
              <div>
                <Tabs> 
                  <div label="Overview"> 
                    <div className="ov_text_wrap">
                      <p dangerouslySetInnerHTML={createMarkup(course.description)}></p>
                    </div>
                  </div>
                  <div label="Curriculum"> 
                    <div className="cc_wrap mt-20">
                      <ul className="accordion_box clearfix p-0">
                        {curriculum.map((curr) => (  

                            <li className="accordion block active-block" key={curr.id}>
                                <div className="acc-btn">
                                    {curr.section_title}
                                </div>
                                <ul className="acc_body current">

                                  {curr.chapters.map((chapter) => (

                                    <li key={chapter.id}>
                                        <a > {chapter.chapter_title} </a>
                                    </li>
                                  ))}
                                </ul>
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div> 
                  <div label="Instructor"> 
                  <div className="instructor_wrap">
                      <div className="instructor_info ul_li justify-content-start">
                          <div className="instructor_img">
                            { user.avatar == null ? <img src={instructorImg} alt="" /> : <img src={user.avatar} alt="" /> }
                              <img src={instructorImg} alt="" />
                          </div>
                          <div className="info">
                              <h3 className="title">{user.name} {user.firstname}</h3>
                              <div className="instructor_student ul_li">
                                  <span>{user.courses_count} Course (s) </span>
                                  <span>{user.students_count} Student (s) </span>
                              </div>
                              <div className="instructor_btn mt-2">
                                <span className="instructor_function">{user.function}</span>
                              </div>
                          </div>
                      </div>
                      <div className="instructor_dtls mt-4">
                          <p>{user.bio}</p>
                      </div>
                  </div>
                  </div> 
                  <div label="Reviews"> 
                  <div className="review_wrap">
                    <div className="post_comment">
                        <h3 className="comment_title">Reviews</h3>
                        <ul className="comment_list mb-40 p-0">
                          {reviews.map((review) => (
                            <li key={review.id}>
                              <div className="comment_author">
                                { review.user_avatar == null ?<img src={comment_01} alt="" /> : <img src={review.user_avatar} alt="" /> }                         
                              </div>
                              <div className="comment_content">
                                  <h6>{review.user_name} {review.user_firstname} </h6>
                                  <span className="date"><i className="fal fa-calendar-alt"></i>
                                      {review.created_at.substr(0,10)}</span>
                                  <div className="cd_review_wrap ul_li">
                                  </div>
                                  <p>{review.content}</p>
                              </div>
                            </li>
                          ))}
                        </ul>

                        {currentTraining !== false ?
                         <div>
                           <h3 className="comment_title">Add a review</h3>
                           <form onSubmit={handleSubmit}>
                            <FormTextArea
                              name="review"
                              value={newReview}
                              onChange={(e) => setNewReview(e.target.value)}
                              placeholder="Entrez votre commentaire..."
                              />

                              <div className="d-flex justify-content-center">
                                <Button
                                  text="Enregistrer"
                                  bgColorHover="#0073ff"
                                 />
                              </div>
                           </form>
                         </div>: ''}
                      </div>
                    </div>
                  </div> 
                </Tabs> 
                </div>
              </div>
            </div>
            </div>

            {/* sidebar */}
            <div className="col-lg-4">
            <div className="course_dtls_right">
              <div className="course_widget mb-30">
                  <div className="thumb_wrap pos-rel">
                      <div className="thumb">
                      { course.image == null ? <img src={cd_thumb} alt="" style={{width: '100%'}} /> : 
                        <img src={course.image} alt="" style={{width: '100%'}} />}
                      </div>
                     
                  </div>
                  <div className="course_content">
                      <ul>
                          <li>
                              <span className="left">Duration :</span>
                              <span>{course.hours}</span>
                          </li>
                          <li>
                              <span className="left">Skill Level :</span>
                              <span>Beginner</span>
                          </li>
                          <li>
                              <span className="left">Views :</span>
                              <span>{course.views}</span>
                          </li>
                      </ul>
                      <div className="course_btn text-center mt-3 d-flex justify-content-center">
                       {renderTrainingButton()}
                      </div>
                  </div>
              </div>
          </div>
            </div>
          </div>
        </div>
      </section>

    </CourseDetailsComponent>
  )
}

const CourseDetailsComponent = styled.div`
  padding-top: 118px;
  .course_details_area{
    background-color: #f7f7f7;
  }
`;

CourseDetails.propTypes = {
  match: PropTypes.object,
  dispatch: PropTypes.func,
  course: PropTypes.object,
  currentUser: PropTypes.object,
  user: PropTypes.object,
  reviews: PropTypes.array,
  token: PropTypes.string,
  curriculum: PropTypes.array,
  currentTraining: PropTypes.object
}

const mapStateToProps = state => {
  return {
    course: state.course.course,
    user: state.user.user,
    reviews: state.reviews.reviews,
    token: state.authentication.token,
    curriculum: state.curriculum.curriculum,
    currentUser: state.authentication.user,
    currentTraining: state.training.currentTraining
  }
}
export default connect(mapStateToProps)(CourseDetails)
