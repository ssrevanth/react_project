import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../users/Login'

const PrivateRouter = ({children}) => {
    let navigate=useNavigate()
    useEffect(()=>{
        if(!sessionStorage.getItem("Token")){
            navigate('/')
        }   
    },[navigate])
  return (
    sessionStorage.getItem("Token")?<>{children}</>:<Login></Login>
  )
}

export default PrivateRouter
