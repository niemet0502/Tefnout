import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

// import images 
import img_01 from "../../../assets/img/img_01.jpg"
import c_author from "../../../assets/img/c_author.png"

// import icons 
import PeopleIcon from '@material-ui/icons/People';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
function CourseCard({
  title,
  banner,
  level,
  views,
  teacher_image,
  category_name,
  follow_courses_count,
  notes_count,
  slug, 
  total_note
}) {
  return (
    <CourseComponent>
      <div className="course_single mb-30">
          <div className="c_thumb">
            {banner == null ? <img src={img_01} alt=""/> : <img src={banner} alt=""/>}
          </div>
          <div className="course_content">
              <div className="c_head">
                  <span className="cat">{category_name}</span>
                  <span className="price">{level}</span>
              </div>
              <div style={{minHeight: '100px'}}>
                <h3 className="title" >
                  <Link to={`/course/${slug}`}>
                    {title}
                  </Link>
                </h3>
              </div>
              <div className="rating_wrap ul_li d-flex">
                  <span>13 votes</span>
                  <ul className="rating_star ul_li d-flex">
                      <li><StarIcon /></li>
                      <li><StarIcon /></li>
                      <li><StarIcon /></li>
                      <li><StarIcon /></li>
                      <li><StarBorderIcon /></li>
                  </ul>
              </div>
              <ul 
                className="c_bottom ul_li d-flex mt-2" 
                style={{paddingLeft: '30px'}}>
                  <div className="d-flex">
                    <li className="d-flex"> <PeopleIcon />  {follow_courses_count}</li>
                    <li className="d-flex"> <VisibilityIcon /> {views}</li>
                    </div>
                  <li>
                      <div className="author">
                        {teacher_image == null ? <img src={c_author} alt=""/> : <img src={teacher_image} alt=""/>} 
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    </CourseComponent>
  )
}

const CourseComponent = styled.div`
    margin-top: 20px;
    flex: 0 0 auto;
    width: 32.3333333333%;
    background-color: white;
    padding: 15px;

    .c_bottom div{
      display: flex;
      align-items: center;
    }

    .c_bottom div li{
      width: 100px;
      margin-bottom: -1px;
    }

    .c_bottom div li svg{
      margin-right: 5px;
    }
    .c_bottom div li:nth-child(2){
      padding-left: 10px;
    }
`;

CourseCard.propTypes = {
  title: PropTypes.string,
  banner: PropTypes.string,
  level: PropTypes.string,
  views: PropTypes.number,
  teacher_image: PropTypes.string,
  category_name: PropTypes.string,
  follow_courses_count: PropTypes.number,
  notes_count: PropTypes.number,
  total_note: PropTypes.string,
  slug: PropTypes.string
}

export default CourseCard
