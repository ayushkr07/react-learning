import React,{useState} from 'react'
import Hook7useEffectmouse from './Hook7useEffectmouse'

function Hook7useEffectmousetoggle() {
    const[display,setDisplay]=useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle Mouse</button>
        {display && <Hook7useEffectmouse/>}
    </div>
  )
}

export default Hook7useEffectmousetoggle