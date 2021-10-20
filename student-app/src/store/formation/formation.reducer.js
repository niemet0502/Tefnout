import * as actions from "./formation.actions"

const initialState = {
  currentTraining: false
}

function formationReducer(state = initialState, action){
  switch (action.type) {
    case actions.CHECK_IF_TRAINING_EXIST:
      return {...state, currentTraining: action.payload}
    default:
      return state;
  }
}

export default formationReducer