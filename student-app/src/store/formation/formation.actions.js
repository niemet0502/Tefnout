import { parseTrainingObjet } from "../../utils/helpers"

export const CHECK_IF_TRAINING_EXIST = 'CHECK IF TRAINING EXIST'

export const checkIfTrainingExit = (training) => ({type: CHECK_IF_TRAINING_EXIST, payload: training})

export function trainingIsExist(course,student){
  return async dispatch => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/student/${student}/training/3`)
      const data = await response.json()

      console.log(data);
      dispatch(checkIfTrainingExit(parseTrainingObjet(data)))
    } catch (error) {
      
    }
  }
}