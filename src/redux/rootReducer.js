import {ADD_ITEM, REMOVE_ITEM} from './types'

const initialState = {
  tasks: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        tasks: state.tasks.filter(item => item !== action.payload),
      }
    }
    default: {
      return state
    }
  }
}


