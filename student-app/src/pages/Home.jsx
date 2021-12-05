import React, { useEffect } from 'react'
import styled from "styled-components"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { fetchLastCourses } from "../store/courses/courses.actions"
import { fetchCategories } from "../store/categories/categories.actions"
import { Link } from "react-router-dom"
// components 
import CategoryCard from "../components/Marketplace/CategoryCard"
import CourseCard from '../components/Marketplace/Course/CourseCard'
import Button from '../components/Marketplace/Button'
import Instructor from '../components/Marketplace/Instructor'
import Footer from '../components/Marketplace/Footer'
// images 
import hero_icon from "../assets/img/hero_icon.png"
import hero_img from "../assets/img/hero_img.png"

//icon 
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Home({
  users,
  usersLoader,
  courses,
  coursesLoader,
  categories,
  categoriesLoader,
  dispatch
}) {

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchLastCourses())
  }, [dispatch])

  return (
    <HomePage>
    <div>
      <section className="hero_area">
          <div className="hero_wrap hero_height">
              <div className="container-fluid">
                  <div className="row flex-row-reverse align-items-center">
                      <div className="col-xl-7 col-lg-6 col-md-12">
                          <div className="hero_img f-right">
                              <img src={hero_img} alt=""/>
                          </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 col-md-12">
                          <div className="hero_content">
                              <div className="icon">
                                  <img src={hero_icon} alt=""/>
                              </div>
                              <span># Apprendre Tout, Tout le temps</span>
                              <h2>Meilleure platforme de formation en ligne.</h2>
                              <p>Nous croyons que tout le monde a du potentiel. Notre place est l&apos;endroit ou vous developper vos connaissances.</p>
                              <div className="hero_btn mt-15 d-flex">
                              <Link to="/courses">
                                <Button 
                                  text="Courses"
                                  Icon={ArrowRightAltIcon}  />
                              </Link>

                              <Link to="/login">
                                <Button 
                                  text="Debuter" 
                                  bgColor="#e5175c"
                                  bgColorHover="#0073ff"
                                  Icon={ArrowRightAltIcon} />
                              </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
    <section className="courses_area pt-5 pb-5 category-section">
      <div className="container">
        <div className="row align-items-center mb-5">
            <div className="col-lg-8 col-md-8">
                <div className="sec_title">
                    <h2>Nos categories</h2>
                    <p>La formation en ligne vous offre une nouvelle maniere d&apos;explorer des sujets qui vous passiones</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                
            </div>
        </div>
        <div className="row ">
          {categories.map((category) => (
              <CategoryCard 
                key={category.id} 
                title={category.name}
                image={category.image}
              />
          ))}
        </div>
      </div>
    </section>


    <section className="courses_area pt-5 pb-5 category-section">
      <div className="container">
        <div className="row align-items-center mb-5">
            <div className="col-lg-8 col-md-8">
                <div className="sec_title">
                    <h2>Cours</h2>
                    <p>La formation en ligne vous offre une nouvelle maniere d&apos;explorer des sujets qui vous passiones</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="crs_btn d-flex justify-content-end mb-20">
                <Link to="/courses">
                  <Button 
                    text="Liste des cours"
                    Icon={ArrowRightAltIcon}  />
                  </Link>
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
    </HomePage>

  )
}

const HomePage = styled.div`
  margin: 0;
  padding: 0 !important;
  padding-top: 120px !important;
 
  //margin-top: var(--bs-gutter-y);

  .category-section{
    background-color: #f7f7f7;
  }

  .hero_area {
    background: #fff;
  }
  .hero_wrap {
  padding-left: 140px;
	padding-right: 140px;
	display: flex;
	align-items: center;
}
.hero_content .icon {
	margin-bottom: 36px;
}
.hero_content span {
	font-size: 18px;
	font-weight: 600;
	display: inline-block;
	color: #e5175c;
	margin-bottom: 20px;
}
.hero_content h2 {
	font-size: 60px;
	line-height: 70px;
	margin-bottom: 30px;
	max-width: 700px;
}
.hero_content p {
	font-size: 18px;
	line-height: 29px;
	max-width: 700px;
}
.hero_content .hero_btn a {
	margin-top: 20px;
	margin-right: 20px;
}
.hero_content .hero_btn a:last-child {
    margin-right: 0;
}
`;

Home.propTypes = {
  users : PropTypes.array,
  usersLoader : PropTypes.bool,
  courses : PropTypes.array,
  coursesLoader : PropTypes.bool,
  categories : PropTypes.array,
  categoriesLoader : PropTypes.bool,
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  return{
    users: state.users.users,
    usersLoader: state.users.loading,
    courses: state.courses.courses ,
    coursesLoader: state.courses.loading,
    categories: state.categories.categories,
    categoriesLoader: state.categories.loading
  }
}
export default  connect (mapStateToProps)(Home)
