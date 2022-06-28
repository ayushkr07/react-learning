import React,{useEffect, useState} from 'react'

function Hook7useEffectmouse() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

    const logMousePosition=e=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffecttt Called')
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
            console.log('component Unmounted')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])


  return (
    <div>
        Hook X - {x}  Y - {y}
    </div>
  )
}

export default Hook7useEffectmouse