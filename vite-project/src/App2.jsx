import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
const App2 = (props) => {
  const [posts,setposts]=useState([])
    const [names,setnames]=useState("")
    const [array,setarray]=useState([]) 
    useState(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        console.log(response.data)
        setposts(response.data)
    }).catch((err)=>{
        console.log(err)
    }) 
    },[])
    const  inputchange=(event)=>{
      setnames(event.target.value)
    //   console.log(event.target.value)
    
    }
    const add=()=>{
      array.push(names)
      setarray([...array])
    //   console.log(array)
    
    }
  return (
    <div>
      <label>Name</label>
       <input type={"text"} onChange={inputchange} ></input>
       <button onClick={add}>Add</button>
       {
        posts.map((post)=>(
          <li key={post.id}>{post.name}</li>
        ))
       }
       {
        array.map((ele,i)=>(
         <li key={i}>{ele}</li>
        ))
       }
    </div>
  )
}

export default App2
