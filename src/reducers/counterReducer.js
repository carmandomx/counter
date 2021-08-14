import { counterTypes } from '../actions'

const INITIAL_STATE = {
  data: 0
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case counterTypes.increment:
      return {
        ...state,
        data: state.data + 1
      }
    case counterTypes.decrement:
      return {
        ...state,
        data: state.data - 1
      }

    default:
      return state
  }
}

export default reducer
