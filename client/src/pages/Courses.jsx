import React from 'react'
import styled from 'styled-components'

// components 
  import Button from '../components/Marketplace/Button'


// images 
import bg_image from "../assets/img/counter_bg.jpg"
function Courses() {
  return (
    <CoursePage>
     <section class="page_title_area course_page_banner mb-4" data-overlay="6">
        <div class="containe">
          <div class="row">
              <div class="col-l2">
                  <div class="page_title text-center">
                      <h2>Our Courses</h2>
                      <nav aria-label="breadcrumb">
                          <ol class="breadcrumb justify-content-center">
                              <li class="breadcrumb-item">
                                  <a href="index.html">Home</a>
                              </li>
                              <li class="breadcrumb-item active" aria-current="page">Courses</li>
                          </ol>
                      </nav>
                  </div>
              </div>
          </div>
        </div>
      </section>

      <section class="courses_area pt-5 pb-5">
        <div class="container">
          <div class="row">
              <div class="col-12">
                  <div class="masonry_active mb-40 d-flex">
                  <Button 
                    text="Views courses" />

                  <Button 
                    text="Start trial" 
                    bgColor="#0073ff"
                    bgColorHover="#0073ff"/>

                  </div>
              </div>
          </div>
        </div>
      </section> 
    </CoursePage>
  )
}

const CoursePage = styled.div`
  .course_page_banner{
    background-image: url(${bg_image});
  }
`;
export default Courses
