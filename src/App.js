import './App.css'

import { useDispatch, useSelector, useStore } from 'react-redux'
import { decrement, increment } from './actions'

function App () {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <header className='App-header'>
        {counter}{' '}
        <div>
          <button
            onClick={() => {
              dispatch(increment())
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(decrement())
            }}
          >
            -
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
