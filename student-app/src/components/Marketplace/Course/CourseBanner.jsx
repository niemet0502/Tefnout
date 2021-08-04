import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// images 
import bg_image from "../../../assets/img/counter_bg.jpg"
function CourseBanner({title,page}) {
  return (
    <CourseBannerComponent>
      <div class="containe">
          <div class="row">
              <div class="col-l2">
                  <div class="page_title text-center">
                      <h2>{title}</h2>
                      <nav aria-label="breadcrumb">
                          <ol class="breadcrumb justify-content-center">
                              <li class="breadcrumb-item">
                                <Link to="/">
                                  Home
                                </Link>
                              </li>
                              <li class="breadcrumb-item active" aria-current="page">{page}</li>
                          </ol>
                      </nav>
                  </div>
              </div>
          </div>
        </div>
    </CourseBannerComponent>
  )
}

CourseBanner.propTypes = {
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
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
