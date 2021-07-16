import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

// images 
import bg_image from "../assets/img/counter_bg.jpg"
function CourseDetails() {
  return (
    <CourseDetailsComponent>
      <section class="page_title_area course_page_banner" data-overlay="6">
        <div class="containe">
          <div class="row">
              <div class="col-l2">
                  <div class="page_title text-center">
                      <h2>Course Details</h2>
                      <nav aria-label="breadcrumb">
                          <ol class="breadcrumb justify-content-center">
                              <li class="breadcrumb-item">
                                <Link to="/">
                                  Home
                                </Link>
                              </li>
                              <li class="breadcrumb-item active" aria-current="page">Details</li>
                          </ol>
                      </nav>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </CourseDetailsComponent>
  )
}

const CourseDetailsComponent = styled.div`
  .course_page_banner{
    background-image: url(${bg_image});
  }
`;
export default CourseDetails
