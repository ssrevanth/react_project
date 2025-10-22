import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ContextApi } from '../context/Context'
import { service } from '../services/Services'

const Update = () => {
    let {globalState,setGlobalState}=useContext(ContextApi)
    let navigate=useNavigate()
    let {state}=useLocation()
   console.log(state)
   //console.log(globalState)

   let [data,setData]=useState({
        title:state.title,
        content:state.content
    })

    let handleChange=(e)=>{
        let {name,value}=e.target
        setData((preval)=>({
            ...preval,[name]:value
        }))
        console.log(data)
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        let {title,content}=data
       // console.log(data)
        
        let payload={title,content,userid:globalState.id}
        service.editTask(state.id,payload)
        navigate('/gettask')
        console.log(payload)
    }
  return (
    <main>
   <form action="" onSubmit={handleSubmit} id='createCard'>
    <div>
        <label htmlFor="" >Title</label><br />
        <input type="text" value={data.title} name='title' onChange={handleChange}/>
    </div><br />
    <div>
        <label htmlFor="">Content</label><br />
        <textarea name='content' id="" cols={30} rows={15} value={data.content} onChange={handleChange}></textarea>
    </div><br />
    <div id='createSubmit'>
        <button id='createSub'>Update</button>
    </div>
   </form>
   </main>
  )
}

export default Update
