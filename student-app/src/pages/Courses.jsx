import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import * as actions from "../store/courses/courses.actions"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { fetchCategories } from '../store/categories/categories.actions'
import { fetchAllCourses, fetchCoursesByCategories } from '../store/courses/courses.actions' 
// components 
import Button from '../components/Marketplace/Button'
import CourseCard from '../components/Marketplace/Course/CourseCard'
import CourseBanner from '../components/Marketplace/Course/CourseBanner'
// images 
import bg_image from "../assets/img/counter_bg.jpg"
import FormInput from '../components/Marketplace/Form/FormInput'


function Courses({courses,dispatch,categories}) {
  const [currentCategory, setCurrentCategory] = useState(0)
  const [search, setSearch] = useState('')
  useEffect(() => {
    if(currentCategory == 0){
      dispatch(fetchAllCourses())
    }else{
      dispatch(fetchCoursesByCategories(currentCategory))
    }
  }, [currentCategory])

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchAllCourses())
  }, [dispatch])

  useEffect(() => {
    if( search !== ''){
      dispatch(actions.searchCourse(search))
    }
  }, [search])

  return (
    <CoursePage>
      <CourseBanner
      title="Our Courses"
      page="COURSES"/>
      
      <section className="courses_area pt-5 pb-5" style={{background: '#f7f7f7'}}>
        <div className="container">
          <div className="search-container d-flex justify-content-end">
            <FormInput
              name="username"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              required
              // error={errors.username}
              className="input w-25 bg-white"
            />
          </div>
          <div className="row">
              <div className="col-12">
                  <div className="mb-40 d-flex">
                  <Button 
                    text="All categories"
                    bgColorHover="#0073ff" 
                    bgColor={currentCategory == 0 ? "#0073ff" : "#ffff"} 
                    handleClick={() => setCurrentCategory(0)}
                    />

                  {categories.filter((cat) => cat.CoursesCount > 0).map((category) => (
                    <Button 
                      key={category.id}
                      text={category.name}
                      bgColor={currentCategory == category.id ? "#0073ff" : "#ffff"} 
                      handleClick={() => setCurrentCategory(category.id)} />
                  ))}

                  </div>
              </div>
          </div>

          <div className="row justify-content-between ">
            {courses.map((course) => (
              <CourseCard 
                key={course.id} 
                title={course.title}
                slug={course.slug}
                banner={course.image}
                level={course.level}
                views={course.views}
                teacher_image={course.teacher_image}
                category_name={course.category_name}
                follow_courses_count={course.follow_courses_count}
                notes_count={course.notes_count}
                total_note={course.total_note}
              />
            ))}
          </div>
        </div>
        
      </section> 
    </CoursePage>
  )
}

const CoursePage = styled.div`
  padding-top: 110px;

  .course_page_banner{
    background-image: url(${bg_image});
  }
`;

Courses.propTypes = {
  courses: PropTypes.array,
  categories: PropTypes.array,
  dispatch: PropTypes.func
}

const mapStateToProps =  state => {
  return {
    courses: state.courses.courses,
    categories: state.categories.categories
  }
}
export default connect(mapStateToProps)(Courses)
