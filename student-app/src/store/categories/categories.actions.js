export const  GET_CATEGORIES_LOADING =  'GET CATEGORIES LOADING'
export const  GET_CATEGORIES_SUCCESS =  'GET CATEGORIES SUCCESS'
export const  GET_CATEGORIES_FAILURES =  'GET CATEGORIES FAILURES'

export const getCategories = () => ({type: GET_CATEGORIES_LOADING})
export const getCategoriesSuccess = (categories) => ({type: GET_CATEGORIES_SUCCESS, payload: categories})
export const getCategoriesFailures = () => ({type: GET_CATEGORIES_FAILURES})

export function fetchCategories(){
  return  async dispatch => {
    dispatch(getCategories())
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/categories');

        const data = await response.json()
        dispatch(getCategoriesSuccess(data))
    } catch (error) {
      console.log(error);
      dispatch(getCategoriesFailures())
    }
  }
}