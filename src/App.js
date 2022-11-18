import React from 'react'
import useCounter from './hooks/useCounter'
let number = 9
function App() {
  const {changeNumberInc, changeNumberDec,count,resetNumber } = useCounter(number,5,50,0)
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={changeNumberInc}>+</button>
      <button onClick={changeNumberDec}>-</button>
      <button onClick={resetNumber}>reset</button>
    </div>
  )
}

export default App