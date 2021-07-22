import React from 'react'
import styled from 'styled-components'

// components 
import Button from '../components/Marketplace/Button'
import CourseCard from '../components/Marketplace/Course/CourseCard'
import CourseBanner from '../components/Marketplace/Course/CourseBanner'

// images 
import bg_image from "../assets/img/counter_bg.jpg"
function Courses() {
  return (
    <CoursePage>
      
      <CourseBanner
      title="Our Courses"
      page="COURSES"/>
      
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

          <div class="row justify-content-between ">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
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
