import React, { useState,useEffect } from 'react'

function Hook5useEffectO() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`click ${count}`
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>button {count}</button>
    </div>
  )
}

export default Hook5useEffectO