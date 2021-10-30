import React from 'react'
import FormInput from '../../components/form/FormInput'
import FormSelect from '../../components/form/FormSelect'
const CourseInformation = () => {
  return (
    <div>
      <div className="title-icon">
        <h3 className="title">Informations de base</h3>
      </div>

      <div className="course__form p-4">
        <form action="">
        <div className="ui left icon input swdh11 swdh19">
          <FormInput
            name="name"
            type="text"
            label="Titre*"
            placeholder="titre du cours..."
            className="prompt srch_explore"
            required
          />   
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="ui left icon input swdh11 swdh19">
            <FormInput
              name="Duree"
              type="text"
              label="Duree*"
              placeholder="duree du cours..."
              className="prompt srch_explore"
              required
            />   
            </div>
          </div>
          <div className="col-md-6">
          <div className="ui left icon input swdh11 swdh19">
            <FormInput
              name="topics"
              type="text"
              label="Topics*"
              placeholder="topics..."
              className="prompt srch_explore"
              required
            />   
          </div>
          </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6">
              <div className="ui search focus mt-2 ">
              <div className="ui left icon input swdh95" style={{marginRight: '20px'}}>
                <FormSelect
                  name="categorie"
                  label="Categorie"
                />
              </div>
              </div>

            </div>
            <div className="col-md-6">
              <div className="ui search focus mt-2 ">
                <div className="ui left icon input swdh95" style={{marginRight: '20px'}}>
                <FormSelect
                  name="niveau"
                  label="Niveau"
                />
                </div>
              </div>

            </div>
          </div>
        </form> 													
      </div>
    </div>
  )
}

export default CourseInformation
