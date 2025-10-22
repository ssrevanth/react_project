import React, { useContext, useEffect, useState } from 'react'
import { ContextApi } from '../context/Context'
import { service } from '../services/Services'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Update.module.css'

const GetTask = () => {
  
    let {globalState,setGlobalState}=useContext(ContextApi)
    console.log(globalState.id)
    let [state,setState]=useState([])
    let navigate=useNavigate()
   useEffect(()=>{
    (async()=>{
        let {data}=await service.gettask(globalState.id)
        console.log(data)
        setState(data)
    })()
  }  
,[])
let handleClick=()=>{
  navigate("/createTask")

}
let handleDeleteClick=(id)=>{
  (async()=>{
    let data=await service.deleteTask(id)
    setState(state.filter((val)=>val.id!=data.id))
  })()
}
let handleLogout=()=>{
  sessionStorage.removeItem("Token")
  navigate('/')
}
  return (
  <div className={styles.mainContainer}>
    <button onClick={handleLogout} className={styles.logout}>Logout</button>
    <div className={styles.cardContainer}>
    {
       
    state.length?state.map((val)=>{
      return <div className={styles.card} key={val.id}>
        
        <h2>{val.title}</h2>
        <h2>{val.content}</h2>
        <button id={styles.update}><Link to="/updateTask" state={{...val}}>Update</Link></button>
        <button onClick={()=>{
          handleDeleteClick(val.id)
        }} id={styles.delete}>Delete</button>
        
      </div>
      
      
    }):"loading...."
    
    }
    </div>
    
   
   <button onClick={handleClick} id={styles.addTask} ></button>
  
  </div>
  )
}

export default GetTask
