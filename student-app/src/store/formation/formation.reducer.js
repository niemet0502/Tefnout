import * as actions from "./formation.actions"

const initialState = {
  currentTraining: false,
  trainingState : [],
  currentChapter: {},
  currentChapterProgress: {}
}

function formationReducer(state = initialState, action){
  switch (action.type) {
    case actions.CHECK_IF_TRAINING_EXIST:
      return {...state, currentTraining: action.payload}
    case actions.GET_FORMATION_SUCCESS: 
      return {...state, trainingState: action.payload}
    case actions.GET_CHAPTER_SUCCESS: 
      return {...state, currentChapter: action.payload.content, currentChapterProgress: action.payload.training}
    case actions.CANCEL_FORMATION: 
      return {...state, currentTraining: false}
    default:
      return state;
  }
}

export default formationReducer