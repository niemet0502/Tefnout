import React from 'react'
import PageHeader from "../../components/common/PageHeader"
import Button from "../../components/common/Button";
import Section from "../../components/course/Section"
const CourseContent = () => {
  return (
    <div>
      <div className="title-icon">
        <h3 className="title">Contenu</h3>
      </div>

      <PageHeader 
          // Icon={LibraryBooksOutlinedIcon} 
          text="Contenu"
          > 
          <Button 
            text="Nouvelle Section"
          /> 
        </PageHeader>

      <Section /> 
    </div>
  )
}

export default CourseContent
