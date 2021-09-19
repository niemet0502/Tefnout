import axios from "axios"
export const GET_USERS_LOADING = 'GET USERS LOADING'
export const GET_USERS_SUCCESS = 'GET USERS SUCCESS'
export const GET_USERS_FAILURES = 'GET USERS FAILURES'
export const DELETE_USER = 'DELETE USER'
export const ADD_USER = 'ADD USER'

export const getUsers = () => ({type: GET_USERS_LOADING})
export const getUsersSuccess = (users) => ({type: GET_USERS_SUCCESS, payload: users})
export const getUsersFailures = () => ({type: GET_USERS_FAILURES})
export const deleteUser = (user) => ({type: DELETE_USER, payload: user.id})
export const addUser = user => ({type: ADD_USER, payload: user})

export function fetchUsers(){
  return async dispatch => {
    dispatch(getUsers())

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users")
      const data = await response.json()

      dispatch(getUsersSuccess(data))
    } catch (error) {
      console.log(error);
      dispatch(getUsersFailures())
    }
  }
}

export function removeUser(user){
  return async dispatch => {
    
    try {
      await axios.delete(`http://127.0.0.1:8000/api/users/${user.id}`)

      dispatch(deleteUser(user))
    } catch (error) {
      console.log(error);
    }
  }
}

export function newUser(user){
  return async dispatch => {
    try {

        const response = await fetch("http://127.0.0.1:8000/api/register",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email, 
            profil_id: user.profil_id,
            password: "passer2019@",
            password_confirmation: "passer2019@"})
        })

        const data = await response.json()
        let profil_name = ""
        if (user.profil_id == 1){
          profil_name = "Administrateur"
        }else{
          if (user.profil_id == 3){
            profil_name = "Formateur"
          }else{
            profil_name = "Apprenant"
          }
        }
        dispatch(addUser({...data.user, profil_name: profil_name}))
      
    } catch (error) {
      console.log(error);
    }
  }
}