import { parseTrainingObjet, parseTrainingState, findCurrentChapter } from "../../utils/helpers"

export const CHECK_IF_TRAINING_EXIST = 'CHECK IF TRAINING EXIST'
export const GET_FORMATION_SUCCESS = 'GET FORMATION SUCCESS'
export const GET_CHAPTER_SUCCESS = 'GET CHAPTER SUCCESS'

export const checkIfTrainingExit = (training) => ({type: CHECK_IF_TRAINING_EXIST, payload: training})
export const getFormationSuccess = (data) => ({type: GET_FORMATION_SUCCESS, payload: data}) 
export const getChapterSuccess =  (chapter) => ({type: GET_CHAPTER_SUCCESS, payload:chapter })

export function trainingIsExist(course,student){
  return async dispatch => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/student/${student}/training/${course}`)
      const data = await response.json()

      dispatch(checkIfTrainingExit(parseTrainingObjet(data)))
    } catch (error) {
      
    }
  }
}


export function fetchTrainingState(slug,student){
  return async dispatch => {

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/training/${slug}/student/${student}`)
      const data = await response.json()

      const trainings = parseTrainingState(data);

      dispatch(getFormationSuccess(trainings));
      dispatch(fetchChapter(findCurrentChapter(trainings)));
    } catch (error) {
      
    }
  }
}

export function fetchChapter(chapter){
  return async dispatch => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/chapter/${chapter}`)
      const data = await response.json()

      dispatch(getChapterSuccess(data))
    } catch (error) {
      
    }
  }
}