import React, { useState } from 'react'

function AddTodo({addTodo}) {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();

        if(!title || !desc){
            alert("Title or Description can not be blank");
        }
        addTodo(title,desc);
    }
    return (
        <div className='container'>
            <h4>Add Todo</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Desc</label>
                    <input type="text" onChange={(e)=>{setDesc(e.target.value)}} value={desc} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo