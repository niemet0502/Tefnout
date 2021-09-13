import axios from "axios"
import { getStoredAuthToken } from "../../utils/currentUser"

export const GET_CATEGORIES_LOADING = 'GET CATEGORIES LOADING'
export const GET_CATEGORIES_SUCCESS = 'GET CATEGORIES SUCCESS'
export const GET_CATEGORIES_FAILURES = 'GET CATEGORIES FAILURES'
export const DELETE_CATEGORY = 'DELETE CATEGORY'
export const ADD_CATEGORY = 'ADD CATEGORY'
export const UPDATE_CATEGORY = 'UPDATE CATEGORY'

export const getCategories = () => ({type: GET_CATEGORIES_LOADING})
export const getCategoriesSuccess = (data) => ({type: GET_CATEGORIES_SUCCESS, payload: data}) 
export const getCategoriesFailures = () => ({type: GET_CATEGORIES_FAILURES})
export const deleteCategory = (id) => ({type: DELETE_CATEGORY, payload: id})
export const addCategory = (category) => ({type: ADD_CATEGORY, payload: category})
export const updateCategory = (category) => ({type: UPDATE_CATEGORY, payload: category})


export function fetchCategories(){
  return async dispatch =>{
    dispatch(getCategories())

      try {
        const response = await fetch('http://127.0.0.1:8000/api/categories', { 
          method: 'get', 
          headers: new Headers({
            'Authorization': 'Bear '+getStoredAuthToken(), 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          })
        });

          const data = await response.json()
          dispatch(getCategoriesSuccess(data))
      } catch (error) {
        console.log(error);
        dispatch(getCategoriesFailures())
      }
  }
}

export function removeCategory(id){
  return async dispatch =>{
    
    try {
      await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`)

      dispatch(deleteCategory(id))
    } catch (error) {
      console.log(error);
    }
  }
}

export function newCategory(category){
  return async dispatch => {

    try {
      await axios.post("http://127.0.0.1:8000/api/categories",{
        name: category.label,
        image: category.image
      }
      ,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(result => {

          dispatch(addCategory(result.data.category))      
        }).catch(error => {
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }
}

export function editCategory(category){
  return async dispatch =>{

    try {
      const headers = { 
        // 'Authorization': 'Bearer ',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };

      const response = await axios.put(`http://127.0.0.1:8000/api/categories/${category.id}`, category, { headers })
      
      dispatch(updateCategory(category))
    } catch (error) {
      console.log(error);
    }
  }
}