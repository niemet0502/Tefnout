export const GET_REVIEW_LOADING = 'GET REVIEW LOADING'
export const GET_REVIEW_SUCCESS = 'GET REVIEW SUCCESS'
export const GET_REVIEW_FAILURES = 'GET REVIEW FAILURES'

export const getReview = () => ({type:GET_REVIEW_LOADING })
export const getReviewSuccess = (review) => ({type:GET_REVIEW_SUCCESS ,payload:review})
export const getReviewFailures = () => ({type:GET_REVIEW_FAILURES })

export function fetchCourseReviews(id){
  return async dispatch => {
    dispatch(getReview())
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/course/${id}/reviews`)
      const data = await response.json()

      console.log(data);
      dispatch(getReviewSuccess(data.reviews))
    } catch (error) {
      dispatch(getReviewFailures())
    }
  }
}