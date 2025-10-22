import React, { useContext, useState } from 'react'
import { ContextApi } from '../context/Context'
import { service } from '../services/Services'
//import Context from '../context/Context'
import "../task/Creation.css"
import { useNavigate } from 'react-router-dom'


const Creation = () => {
    let {globalState,setGlobalState}=useContext(ContextApi)
    let navigate=useNavigate()
   // console.log(globalState)
    let [state,setState]=useState({
        title:"",
        content:""
    })
    let {title,content}=state
    let handleChange=(e)=>{
        let {name,value}=e.target
        setState((preval)=>({
            ...preval,[name]:value
        }))
    }
   
   
    let handleSubmit=(e)=>{
        e.preventDefault()
        // let {title,content}=state
        let payload={
            title:title,
            content:content,
            userid:globalState.id
        }
        console.log(payload)
        console.log(globalState)
         service.createTask(payload)
         navigate('/gettask')

    }

  return <>
  <main>
<form action="" onSubmit={handleSubmit} id='createCard'>
    <div>
      <label htmlFor="">Title</label><br />
      <input type="text" name='title' value={title} onChange={handleChange}/>
    </div><br/>
    <div>
        <label htmlFor="">Content</label><br />
        <textarea name="content" id="" cols="30" rows="10" value={content} onChange={handleChange}></textarea>
    </div><br />
    <div id='createSubmit'>
        <button id='createSub'>Submit</button>
    </div>
    </form>
    </main>
    </>
}

export default Creation
