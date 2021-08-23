import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';


//components 
import CourseBanner from '../components/Marketplace/Course/CourseBanner';
import Button from '../components/Marketplace/Button';
import Tabs from '../components/Marketplace/Tabs/Tabs';

//images 
import cd_thumb from "../assets/img/cd_thumb.jpg"

//icons 
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
function CourseDetails() {
  const [value, setValue] = React.useState(2);
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
                  <img src={cd_thumb} alt="" style={{width: '100%'}} />
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
                            <span className="ptice">Debutant</span>
                        </div>
                    </div>
                    <h3 className="title">The Complete ui/ux design course for beginner.</h3>
                    <div className="bottom">
                        <div className="left ul_li d-flex align-items-center">
                            <div className="author">
                                <img src="" alt="" />
                            </div>
                            <h4><span>By :</span>Rasalina Willam</h4>
                        </div>
                        
                    </div>
                </div>
              <div className="cdl_bottom"> 
              <div>
                <h1>Tabs Demo</h1>
                <Tabs> 
                  <div label="Gator"> 
                    See ya later, <em>Alligator</em>! 
                  </div> 
                  <div label="Croc"> 
                    After while, <em>Crocodile</em>! 
                  </div> 
                  <div label="Sarcosuchus"> 
                    Nothing to see here, this tab is <em>extinct</em>! 
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
                          <img src={cd_thumb} alt="" />
                      </div>
                     
                  </div>
                  <div className="course_content">
                      <ul>
                          <li>
                              <span className="left">Duration :</span>
                              <span>3 Hours</span>
                          </li>
                          <li>
                              <span className="left">Lectures :</span>
                              <span>148</span>
                          </li>
                          <li>
                              <span className="left">Skill Level :</span>
                              <span>Beginner</span>
                          </li>
                          <li>
                              <span className="left">Quizzers :</span>
                              <span>09</span>
                          </li>
                          <li>
                              <span className="left">Pass Pareentages</span>
                              <span>80</span>
                          </li>
                          <li>
                              <span className="left">Certificate</span>
                              <span>Yes</span>
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
  .course_details_area{
    background-color: #f7f7f7;
  }
`;
export default CourseDetails
