import React, { useState } from 'react'

function HookCounterTwo() {
    const initCount=0;
    const[count,setCount]=useState(initCount)

    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
  return (
    <div className='container'>
        <h5>Count {count}</h5>
        <button onClick={()=>{setCount(count+1)}}>Increment 1</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement 1</button>
        <button onClick={()=>{setCount(initCount)}}>Reset</button>
        <button onClick={()=>incrementFive()}>Increment  5</button>
        <button onClick={()=>{setCount(count+5)}}>asdf</button>
    </div>
  )
}

export default HookCounterTwo