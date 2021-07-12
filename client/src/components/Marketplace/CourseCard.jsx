import React from 'react'
import styled from "styled-components"

// import images 
import img_01 from "../../assets/img/img_01.jpg"
import c_author from "../../assets/img/c_author.png"

// import icons 
import PeopleIcon from '@material-ui/icons/People';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
function CourseCard() {
  return (
    <CourseComponent>
      <div class="course_single mb-30">
          <div class="c_thumb">
              <img src={img_01} alt=""/>
          </div>
          <div class="course_content">
              <div class="c_head">
                  <span class="cat">Architecture</span>
                  <span class="price">Debutant</span>
              </div>
              <h3 class="title"><a href="course-details.html">The Power of Podcast for Story telling Process</a></h3>
              <div class="rating_wrap ul_li d-flex">
                  <span>13 votes</span>
                  <ul class="rating_star ul_li d-flex">
                      <li><StarIcon /></li>
                      <li><StarIcon /></li>
                      <li><StarIcon /></li>
                      <li><StarIcon /></li>
                      <li><StarBorderIcon /></li>
                  </ul>
              </div>
              <ul class="c_bottom ul_li d-flex">
                  <div className="d-flex">
                    <li className="d-flex"> <PeopleIcon />  180</li>
                    <li className="d-flex"> <VisibilityIcon /> 28k</li>
                    </div>
                  <li>
                      <div class="author">
                          <img src={c_author} alt=""/>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    </CourseComponent>
  )
}

const CourseComponent = styled.div`
    flex: 0 0 auto;
    width: 33.3333333333%;
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

export default CourseCard
