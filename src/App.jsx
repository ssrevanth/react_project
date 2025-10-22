import React from 'react'
// import Login from './Components/users/Login'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Components/router/Routes'
//import Register from './Components/users/Register'

const App = () => {
  // return <Register/>
  // return <Login/>
  return <RouterProvider router={routes}/>
}

export default App
