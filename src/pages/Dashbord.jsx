import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import TaskList from '../components/TaskList'
import { useNavigate } from "react-router-dom"
  
const Dashbord = () => {
const Navigate = useNavigate()
const [tasks,setTask] = useState([])

useEffect(() =>{
  fetchData()
},[])

const fetchData = async () =>{
  try {
    const response =await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    setTask(data);
  }  catch (error){
    console.log (error)
  }
};

  const handleLogout= () => {
  
     localStorage.removeItem('loginData')
     localStorage.removeItem('authData')
     //localStorage.clear()
    Navigate('/login')
  }

  return (
    <div>
        <Navbar title ="Task Management" onLogout={handleLogout}/>
      <h1>My Task</h1>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default Dashbord
