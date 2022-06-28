import React, { useState } from 'react'

function Hook4Array() {
    const[items,setItems]=useState([])

    const addItems=()=>{
        setItems([...items,{
            key:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div className='container'>
        <ul>{items.map((item)=>(
                <li key={item.id}>{item.value}</li>
            ))}
            
        </ul>
        <button onClick={addItems}>Add Items</button>
    </div>
  )
}

export default Hook4Array