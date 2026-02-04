import React from "react"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
  
const Dashbord = () => {


const Navigate = useNavigate()

  const handleLogout= () => {
     localStorage.removeItem('loginData')
     localStorage.removeItem('authData')
     //localStorage.clear()
    Navigate('/login')
  }
  return (
    <div>
        <Navbar title ="Task Management" onLogout={handleLogout}/>
      <h1>This is dashbord.</h1>
    </div>
  )
}

export default Dashbord
