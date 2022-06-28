import React from 'react'

function reducer() {

    const array1=[1,2,3,4]
    const reducer = (accumulator,currentValue)=>accumulator+currentValue
    
    let x=array1.reduce(reducer)
    let y=array1.reduce(reducer,5)
  return (
    <div>
        <p>{x}</p>
        <p>{y}</p>
    </div>
  )
}

export default reducer