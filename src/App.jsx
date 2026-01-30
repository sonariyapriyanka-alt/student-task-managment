import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Header/>
      <Register/>
    </>
  )
}

export default App
