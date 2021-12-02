import { newUser } from "../users/users.actions"
import { toast } from "react-toastify"

export const GET_APPLICATIONS_LOADING = 'GET APPLICATONS LOADING'
export const GET_APPLICATIONS_SUCCESS = 'GET APPLICATONS SUCCESS'
export const GET_APPLICATIONS_FAILURE = 'GET APPLICATONS FAILURE'
export const DELETE_APPLICATION = 'DELETE APPLICATION'

export const getApplications = () => ({type: GET_APPLICATIONS_LOADING  })
export const getApplicationsSuccess = (applications) => ({type: GET_APPLICATIONS_SUCCESS , payload: applications})
export const getApplicationsFailures = () => ({type: GET_APPLICATIONS_FAILURE })
export const deleteApplication = id => ({type: DELETE_APPLICATION, payload: id})

export function fetchApplications(){
  return async dispatch => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/applications")
      const data = await response.json()

      dispatch(getApplicationsSuccess(data))
    } catch (error) {
      
    }
  }
}

export function valideApplication(application){
  return async dispatch => {
    try {
      // create the new user 
      await fetch("http://127.0.0.1:8000/api/register",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: application.fullname,
          email: application.email, 
          profil_id: 3,
          password: "passer2019@",
          password_confirmation: "passer2019@"})
      })


      //delete the application
      await fetch(`http://127.0.0.1:8000/api/applications/${application.id}`, {
        method: "DELETE"
      })

      dispatch(deleteApplication(application.id))

      toast("Demande valider le formateur a bien ete creer",{
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "colored",
        type: toast.TYPE.SUCCESS,
      })
    } catch (error) {
      
    }
  }
}


export function removeApplication(id){
  return async dispatch => {
    
    try {
      await fetch(`http://127.0.0.1:8000/api/applications/${id}`, {
        method: "DELETE"
      })

      dispatch(deleteApplication(id))

      toast("Demande supprimer",{
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "colored",
        type: toast.TYPE.SUCCESS,
      })
    } catch (error) {
      
    }
  }
}
