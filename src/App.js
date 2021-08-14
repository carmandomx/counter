import './App.css'

import { useDispatch, useSelector, useStore } from 'react-redux'
import { decrement, increment } from './actions'

function App () {
  const counter = useSelector(state => state.counter.data)
  const todos = useSelector(state => state.todos.data)
  console.log(todos)
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
        <div>
          <h6>Todos APP</h6>
          {todos.map(value => (
            <p key={value}>{value}</p>
          ))}
        </div>
      </header>
    </div>
  )
}

export default App
