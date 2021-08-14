const INITIAL_STATE = {
  data: [],
  isLoading: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        data: [...state.data, action.payload]
      }

    case 'DELETE_TODO':
      return {
        ...state,
        data: state.data.filter(value => value !== action.payload)
      }

    case '@@INIT':
      return state

    default:
      return state
  }
}

export default reducer
