import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App2 = (props) => {
    const [names,setnames]=useState("")
    const [array,setarray]=useState([]) 
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        console.log(response.data)
    }).catch((err)=>{
        console.log(err)
    }) 
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
        array.map((ele,i)=>(
         <li key={i}>{ele}</li>
        ))
       }
    </div>
  )
}

export default App2
