import React, { useEffect, useState } from 'react'

function Hook6useEffectO() {
    const[count,setCount]=useState(0)
    const[name,setName]=useState('')
    useEffect(()=>{
        
        document.title=`clicked ${count}`
        console.log('useEffect- update')
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={()=>setCount(count+1)}>button {count}</button>
        
    </div>
  )
}

export default Hook6useEffectO