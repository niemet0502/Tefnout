import React, { useEffect } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { fetchCourse } from '../store/course/course.actions';
import { fetchUser } from '../store/user/user.actions';
import { fetchCourseReviews } from '../store/reviews/reviews.actions';
//components 
import CourseBanner from '../components/Marketplace/Course/CourseBanner';
import Button from '../components/Marketplace/Button';
import Tabs from '../components/Marketplace/Tabs/Tabs';

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
  reviews
}) {
  
  useEffect(() => {
    const { slug } = match.params

    dispatch(fetchCourse(slug))
  }, [dispatch, match])

  useEffect(() => {
    dispatch(fetchUser(course.teacher_id))
    dispatch(fetchCourseReviews(course.teacher_id))
  }, [course])

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
                    <img src={image} alt="" style={{width: '100%'}} />}
                  
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
                            <div className="author">
                            { user.avatar == null ? <img src={cd_thumb} alt="" style={{width: '100%'}} /> : 
                              <img src={image} alt="" style={{width: '100%'}} />}
                            </div>
                            <h4><span>By :</span> {user.name} {user.firstname} </h4>
                        </div> 
                        
                    </div>
                </div>
              <div className="cdl_bottom"> 
              <div>
                <Tabs> 
                  <div label="Overview"> 
                    See ya later, <em>Alligator</em>! 
                  </div>
                  <div label="Curriculum"> 
                    See ya later, <em>Alligator</em>! 
                  </div> 
                  <div label="Instructor"> 
                  <div className="instructor_wrap">
                      <div className="instructor_info ul_li">
                          <div className="instructor_img">
                              <img src="assets/img/course/details/instructor.jpg" alt="" />
                          </div>
                          <div className="info">
                              <h3 className="title">Rasalina De WIllamson</h3>
                              <div className="instructor_rating ul_li">
                                  <ul className="rating_star ul_li">
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fal fa-star"></i></li>
                                      <li><i className="fal fa-star"></i></li>
                                  </ul>
                                  <div className="review">
                                      <span>4.9 Rating</span>
                                  </div>
                              </div>
                              <div className="instructor_student ul_li">
                                  <span>24 Course</span>
                                  <span>243 Student</span>
                              </div>
                              <div className="instructor_btn mt-20">
                                  <a href="#">view All Course<i
                                          className="fal fa-long-arrow-right"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="instructor_dtls mt-30">
                          <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation eyee. ullamco
                              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                              dolorrepr ehenderit in voluptate velit esse cillum dolore eu
                              fugiat nulla pariatur. Excepteur sint occaecat yeef cupidatat
                              non proident, sunt in culpa qui officia deserunt mollit anim id
                              est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                              voluptatem</p>
                      </div>
                  </div>
                  </div> 
                  <div label="Reviews"> 
                  <div className="review_wrap">
                    <div className="post_comment">
                        <h3 className="comment_title">{ reviews && reviews.lenght} Reviews</h3>
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
                        <img src={image} alt="" style={{width: '100%'}} />}
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
                              <span className="left">Quizzers :</span>
                              <span>2</span>
                          </li>
                      </ul>
                      <div className="course_btn text-center mt-3 d-flex justify-content-center">
                        <Button 
                          text="Enroll Course"
                          bgColorHover="#0073ff"
                          Icon={ArrowRightAltIcon} />
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
  user: PropTypes.object,
  reviews: PropTypes.array
}

const mapStateToProps = state => {
  return {
    course: state.course.course,
    user: state.user.user,
    reviews: state.reviews.reviews
  }
}
export default connect(mapStateToProps)(CourseDetails)
