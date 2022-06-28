import React from 'react'
import Todo from "./Todo";

function Todos(props) {
  const todo=props.todo;
  return (
    
      <div className="container">
        <h4 className='my-3'>Todo List</h4>
        {props.todo.length===0?<p>No Task</p> :
        todo.map((td)=>{
          return <Todo todo={td} key={td.sno} onDelete={props.onDelete}/>
        })
        }
      </div>
  )
}

export default Todos