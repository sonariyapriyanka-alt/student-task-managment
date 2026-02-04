import React from 'react'
import '../index.css';

function Navbar  ({title,onLogout})  {
  return (
    <nav className="navbar">
    <div className="navbar-brand">
        <h1>{title}</h1>
    </div>

    <div className="navbar-actions">
            <button className="btn-primary">Add Task</button>{onLogout}
        <button className="btn-primary" onClick={onLogout}>  
    logout
</button>

 </div>
    </nav>  
);
}

export default Navbar;
