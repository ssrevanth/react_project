import React, { useState } from 'react'
import axios from 'axios'
import { service } from '../services/Services'
import "../users/Register.css"

const Register = () => {
   
    let [state,setState]=useState({
        email:"",
        password:"",
        gender:"",
    })
   
    let {email,password,gender,skills}=state
    let [checkbox,setcheckbox]=useState([])
   
    let handleChange=(e)=>{
        let {name,value}=e.target
        setState((prevState)=>({
            ...prevState,[name]:value
        }))
    }
    let handleCheckbox=(e)=>{
        let {checked,value}=e.target
        checked?setcheckbox((preval)=>([...preval,value])):setcheckbox(checkbox.filter((val)=>val!=value))
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        let {email,password,gender}=state
        let payload={email,password,gender}
       // console.log(payload)
    //    let data=axios.post("http://localhost:3000/user",payload)
      service.registerUser(payload)
        //console.log(data)
    }
  return <form onSubmit={handleSubmit} id='registerCard'>
    <div>
    <label htmlFor="email">Email: </label>
    <input type="email" name='email' value={email} onChange={handleChange} />
    </div><br />
    <div>
    <label htmlFor="password">Password: </label>
    <input type="password" name='password' value={password} onChange={handleChange} />
    </div><br />
    <div value={gender} onChange={handleChange}>
        <label htmlFor="gender">Gender: </label>
        <input type="radio" name="gender" value="male" />Male
        <input type="radio" name="gender" value="female"/>Female
    </div><br />
    <div value={skills} onChange={handleCheckbox} name="skills">
        <label htmlFor="skills">Skills: </label>
        <input type="checkbox" value="html" name="skills" /> Html 
        <input type="checkbox" value="css" name="skills" /> CSS 
        <input type="checkbox" value="js" name="skills"/> JS
    </div><br />
    <div id='register'>
        <button id='registerSub'>Register</button>
    </div>
   
  </form>

}

export default Register
