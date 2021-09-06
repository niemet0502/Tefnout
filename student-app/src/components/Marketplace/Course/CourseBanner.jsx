import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// images 
import bg_image from "../../../assets/img/counter_bg.jpg"
function CourseBanner({title,page}) {
  return (
    <CourseBannerComponent>
      <div className="containe">
          <div className="row">
              
          </div>
        </div>
    </CourseBannerComponent>
  )
}

CourseBanner.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string,
};

const CourseBannerComponent = styled.section`
  background-image: url(${bg_image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  padding: 150px 0;
`;

export default CourseBanner
