import { parseRaitings } from "../../utils/helpers"

export const GET_COMMENTS_LOADING = 'GET COMMENTS LOADING' 
export const GET_COMMENTS_SUCCESS = 'GET COMMENTS SUCCESS'
export const GET_COMMENTS_FAILURES = 'GET COMMENTS FAILURES'

export const GET_RAITING_LOADING = 'GET RAITING LOADING'
export const GET_RAITING_SUCCESS = 'GET RAITING SUCCESS'
export const GET_RAITING_FAILURES = 'GET RAITING FAILURES'

export const getComments = () => ({type: GET_COMMENTS_LOADING})
export const getCommentsSuccess = comments => ({type: GET_COMMENTS_SUCCESS,payload: comments})
export const getCommentsFailures = () => ({type: GET_COMMENTS_LOADING})

export const getRaiting = () => ({type: GET_RAITING_LOADING})
export const getRaitingSuccess = raiting => ({type: GET_RAITING_SUCCESS,payload: raiting})
export const getRaitingFailures = () => ({type: GET_RAITING_LOADING})

export function fetchAllComments(){
  return async dispatch => {
    dispatch(getComments())
    
    try {
      const response = await fetch("http://127.0.0.1:8000/api/admin/comments");
      const data = await response.json()

      dispatch(getCommentsSuccess(data.comments))
      
    } catch (error) {
      dispatch(getCommentsFailures())
    }
  }
}

export function fetchTeacherCourseComments(id){
  return async dispatch => {
    dispatch(getComments())
    
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/admin/teacher/${id}/comments`);
      const data = await response.json()

      dispatch(getCommentsSuccess(data.comments))
      
    } catch (error) {
      dispatch(getCommentsFailures())
    }
  }
}

export function fetchAllRaiting(){
  return async dispatch => {
    dispatch(getRaiting())
    
    try {
      const response = await fetch("http://127.0.0.1:8000/api/admin/raiting");
      const data = await response.json()

      
      dispatch(getRaitingSuccess(parseRaitings(data.notes)))
      
    } catch (error) {
      dispatch(getRaitingFailures())
    }
  }
}

export function fetchTeacherCourseRaiting(id){
  return async dispatch => {
    dispatch(getRaiting())
    
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/admin/teacher/${id}/raiting`);
      const data = await response.json()

      dispatch(getRaitingSuccess(parseRaitings(data.notes)))
      
    } catch (error) {
      dispatch(getRaitingFailures())
    }
  }
}
