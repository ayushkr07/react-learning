import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'

function DataFetching2() {
    const[post,setPost]=useState({})
    const[id,setID]=useState(1)
    const[idFromButtonClick,setIdFromButtonClick]=useState(1)

    const handleClick=()=>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])
  return (
    <div>
        <input type="text" value={id} onChange={(e)=>{setID(e.target.value)}} />
        <button onClick={handleClick}>Fetch Post</button>
        <div>
            {post.title}
        </div>
    </div>
  )
}

export default DataFetching2