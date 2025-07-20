import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function addValue(){
   if(count<20){
    count=count+1;
    setCount(count);
   }
  }
function removeValue(){
   // console.log("clicked",count); agr ui pw change na dikhe toh check krne k liyw
   if(count >0){
    count=count-1;
    setCount(count);
   }
  }

  return (
    <>
    <h1>chai with react</h1>

    <h2>Counter value:{count}</h2>

    <button onClick={addValue}>Add {count}</button>
    <button onClick={removeValue}>Remove {count}</button>

    </>
  )
}

export default App
