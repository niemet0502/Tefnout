import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

//components 
import CourseBanner from '../components/Marketplace/Course/CourseBanner';
import Button from '../components/Marketplace/Button';

//images 
import cd_thumb from "../assets/img/cd_thumb.jpg"

//icons 
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
function CourseDetails() {
  return (
    <CourseDetailsComponent>
      <CourseBanner />


      <section class="course_details_area pt-5 pb-5">
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-8">
              <div class="course_dtls_left mb-30 p-3 pb-4" style={{background: '#ffff'}}> 
                <div class="cd_thumb">
                  <img src={cd_thumb} alt="" style={{width: '100%'}} />
                </div>
                <div class="cd_content">
                    <div class="meta d-flex">
                        <div class="left ul_li d-flex">
                            <ul class="rating_star ul_li d-flex pl-0">
                                <li><StarIcon /></li>
                                <li><StarIcon /></li>
                                <li><StarIcon /></li>
                                <li><StarBorderIcon /></li>
                                <li><StarBorderIcon /></li>
                            </ul>
                            <div class="review">
                                <span>132 Reviews</span>
                            </div>
                        </div>
                        <div class="right ul_li">
                            <span class="ptice">Debutant</span>
                        </div>
                    </div>
                    <h3 class="title">The Complete ui/ux design course for beginner.</h3>
                    <div class="bottom">
                        <div class="left ul_li d-flex align-items-center">
                            <div class="author">
                                <img src="" alt="" />
                            </div>
                            <h4><span>By :</span>Rasalina Willam</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>

            {/* sidebar */}
            <div class="col-lg-4">
            <div class="course_dtls_right">
              <div class="course_widget mb-30">
                  <div class="thumb_wrap pos-rel">
                      <div class="thumb">
                          <img src={cd_thumb} alt="" />
                      </div>
                     
                  </div>
                  <div class="course_content">
                      <ul>
                          <li>
                              <span class="left">Duration :</span>
                              <span>3 Hours</span>
                          </li>
                          <li>
                              <span class="left">Lectures :</span>
                              <span>148</span>
                          </li>
                          <li>
                              <span class="left">Skill Level :</span>
                              <span>Beginner</span>
                          </li>
                          <li>
                              <span class="left">Quizzers :</span>
                              <span>09</span>
                          </li>
                          <li>
                              <span class="left">Pass Pareentages</span>
                              <span>80</span>
                          </li>
                          <li>
                              <span class="left">Certificate</span>
                              <span>Yes</span>
                          </li>
                      </ul>
                      <div class="course_btn text-center mt-3 d-flex justify-content-center">
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
