import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

//components 
import CourseBanner from '../components/Marketplace/CourseBanner';
// images 
import bg_image from "../assets/img/counter_bg.jpg"
function CourseDetails() {
  return (
    <CourseDetailsComponent>
      <CourseBanner />
    </CourseDetailsComponent>
  )
}

const CourseDetailsComponent = styled.div`
  
`;
export default CourseDetails
