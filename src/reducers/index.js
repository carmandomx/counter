import { counterTypes } from '../actions'

const INITIAL_STATE = {
  counter: 0
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case counterTypes.increment:
      return {
        ...state,
        counter: state.counter + 1
      }
    case counterTypes.decrement:
      return {
        ...state,
        counter: state.counter - 1
      }

    default:
      return state
  }
}

export default reducer
