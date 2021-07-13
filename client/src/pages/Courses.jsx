import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// components 
  import Button from '../components/Marketplace/Button'


// images 
import bg_image from "../assets/img/counter_bg.jpg"
function Courses() {
  return (
    <CoursePage>
     <section class="page_title_area course_page_banner" data-overlay="6">
        <div class="containe">
          <div class="row">
              <div class="col-l2">
                  <div class="page_title text-center">
                      <h2>Our Courses</h2>
                      <nav aria-label="breadcrumb">
                          <ol class="breadcrumb justify-content-center">
                              <li class="breadcrumb-item">
                                <Link to="/">
                                  Home
                                </Link>
                              </li>
                              <li class="breadcrumb-item active" aria-current="page">Courses</li>
                          </ol>
                      </nav>
                  </div>
              </div>
          </div>
        </div>
      </section>

      <section class="courses_area pt-5 pb-5" style={{background: '#f7f7f7'}}>
        <div class="container">
          <div class="row">
              <div class="col-12">
                  <div class="mb-40 d-flex">
                  <Button 
                    text="All categories"
                    bgColorHover="#0073ff" />

                  <Button 
                    text="data science" 
                    bgColor="#ffff"
                    bgColorHover="#0073ff"/>

                  <Button 
                    text="web developpement" 
                    bgColor="#ffff"
                    bgColorHover="#0073ff"/>

                  <Button 
                    text="Frontend" 
                    bgColor="#ffff"
                    bgColorHover="#0073ff"/>

                  <Button 
                    text="Backend" 
                    bgColor="#ffff"
                    bgColorHover="#0073ff"/>



                  <Button 
                    text="Integration" 
                    bgColor="#ffff"
                    bgColorHover="#0073ff"/>

                  <Button 
                    text="Design" 
                    bgColor="#ffff"
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
