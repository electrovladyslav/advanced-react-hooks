// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {useContext} from "react";

const CountContext = React.createContext()

const CountProvider = ({children}) => {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return <CountContext.Provider children={children} value={value}/>
}

function useCount() {
  const ctx = useContext(CountContext);
  if (!ctx) {
    throw new Error(
      'useCount may only be used from within a (child of a) <CountProvider>',
    );
  }
  return ctx;
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*<CountProvider>*/}
        <CountDisplay />
        <Counter />
      {/*</CountProvider>*/}
    </div>
  )
}

export default App
