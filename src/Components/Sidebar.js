import React from 'react'
import './Sidebar.css'
function Sidebar() {
  return (
    <div class="sidebar">
    <ul className='sidebar-content'>
        <li><a href="#"><i class="fas fa-solid fa-cloud cloud"></i></a></li>
        <li><a href="#"><i class="fas fa-light fa-cube cubes"></i></a></li>
        <li><a href="#"><i class="fas fa-light fa-cube cubes"></i></a></li>
        <li><a href="#"><i class="fas fa-light fa-cube cubes"></i></a></li>
        <li><a href="#"><i class="fas fa-light fa-cube cubes"></i></a></li>
        <li><a href="#"><i class="fas fa-light fa-cube cubes"></i></a></li>
        <li><a href="#"><i class="fas fa-light fa-cube cubes"></i></a></li>
    </ul>
        <button className='btn'>DK</button>
    </div>

  )
}

export default Sidebar