import React, { useState } from 'react'

function Hook5useEffect() {
    const[count,setCount]=useState(0)
    const setTitle=()=>{
        setCount(prevCount=>prevCount+1);
        document.title=`clicked ${count}`
    }
  return (
    <div>
        {/* <button onClick={()=>{setCount(count+1)}}>Button {count}</button> */}
        <button onClick={()=>{setTitle()}}>Button2 {count}</button>
    </div>
  )
}

export default Hook5useEffect