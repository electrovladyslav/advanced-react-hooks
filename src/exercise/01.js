// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {useReducer} from "react";

const countReducer = (state, action) => {
  debugger
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.step
      }
    default:
      throw new TypeError('Wrong action type');
  }
}

function Counter({initialCount = 0, step = 2.5}) {
  const [state, dispatch] = useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  // const increment = () => setState({count: count + step})
  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
