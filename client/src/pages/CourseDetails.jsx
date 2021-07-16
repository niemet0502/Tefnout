import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

//components 
import CourseBanner from '../components/Marketplace/CourseBanner';
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
