import axios from 'axios'
import React, { useState } from 'react'
import { service } from '../services/Services'
import { useContext } from 'react'
import  { ContextApi } from '../context/Context'
import { Link, useNavigate } from 'react-router-dom'
import "../users/Login.css"

const Login = () => {
   let [state,setState]= useState({
    email:"",
    password:""
    })
    let {email,password}=state
    let navigate=useNavigate()
    let handleChange=(e)=>{
        let {name,value}=e.target
        setState((prevState)=>({
            ...prevState,[name]:value
        }))
    };
    let {globalState,setGlobalState}=useContext(ContextApi)
    let handleSubmit=(e)=>{
        e.preventDefault()
        let {email,password}=state
        let payload={email,password};
       
      
        (async()=>{
            let data= await service.loginUser(payload)
            console.log(data);
          
            data?setGlobalState(data):setGlobalState("")
            console.log(globalState)

            window.sessionStorage.setItem("Token",data.id)
            
        //     let {data}= await axios.get("http://localhost:3000/user")
        //     let isAvailable=data.find((val)=>val.email==payload.email&&val.password==payload.password)
        //     let check=isAvailable?"valid":"invalid"
        //     console.log(check)

        data?navigate('/gettask'):navigate('/')
         })();
    }


  return <>
  <main>
  <form action="" onSubmit={handleSubmit} className='login'>
     <div >
    <label htmlFor="email">Email </label><br />
    <input type="email" name='email' value={email} onChange={handleChange} />
    </div><br />
    <div>
    <label htmlFor="password">Password </label><br />
    <input type="password" name='password' value={password} onChange={handleChange} />
    </div><br />
    <div id='submit'>
        <button id='sub'>Submit</button>
    </div>
  </form>
  <div id='reg'>
  <Link to='/register'><button id='registerBut'>Register</button></Link>
  </div>
  </main>
  </>
}

export default Login
