import React, { useState } from 'react'
import PageHeader from "../../components/common/PageHeader"
import Button from "../../components/common/Button";
import Section from "../../components/course/Section"
import useModal from '../../hooks/useModal';
import Modal from "../../components/common/Modal"
import FormInput from '../../components/form/FormInput';
const CourseContent = () => {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const [state, setState] = useState('')

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
            handleClick={toggleLoginForm} 
          /> 
        </PageHeader>
        
        <Section />
     
        <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="Nouvelle Section"
        >

          <div className="ui search focus mt-2">
            <div className="ui left icon input swdh95">
            <FormInput
              name="label"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="prompt srch_explore"
              label="Titre"
              required
              />
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-end mt-4">
             <Button 
                classNames="modal-toggle" 
                text="Annuler"
                variant="secondary"
              /> 
              <Button
                text="Enregistrer"
                classNames="mr-0"
              />
            </div>
        </Modal>
    </div>
  )
}

export default CourseContent
