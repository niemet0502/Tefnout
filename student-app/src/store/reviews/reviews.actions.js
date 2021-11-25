import { toast } from "react-toastify"; 

export const GET_REVIEW_LOADING = 'GET REVIEW LOADING'
export const GET_REVIEW_SUCCESS = 'GET REVIEW SUCCESS'
export const GET_REVIEW_FAILURES = 'GET REVIEW FAILURES'

export const ADD_REVIEW_LOADING = 'ADD REVIEW LOADING'
export const ADD_REVIEW_SUCCESS = 'ADD REVIEW SUCCESS'
export const ADD_REVIEW_FAILURES = 'ADD REVIEW FAILURES'

export const getReview = () => ({type:GET_REVIEW_LOADING })
export const getReviewSuccess = (review) => ({type:GET_REVIEW_SUCCESS ,payload:review})
export const getReviewFailures = () => ({type:GET_REVIEW_FAILURES })
export const addReviewSuccess = review => ({type: ADD_REVIEW_SUCCESS, payload: review})

export function addReview(content,id,course){
  return async dispatch =>{
    try {
      const response = await fetch("http://127.0.0.1:8000/api/review", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          content: content,
          formation_id: id
        })
      })

      const data = await response.json()

      toast(`${data.message}`,{
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "colored",
        type: toast.TYPE.SUCCESS,
      })
      dispatch(fetchCourseReviews(course))
    } catch (error) {
      
    }
  }
}

export function fetchCourseReviews(id){
  return async dispatch => {
    dispatch(getReview())
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/course/${id}/reviews`)
      const data = await response.json()

      dispatch(getReviewSuccess(data.reviews))
    } catch (error) {
      dispatch(getReviewFailures())
    }
  }
}