import React from 'react'
import './Home.css'
import Sidebar from './Sidebar'
import './Cards.css'
import Cards from './Cards'
import RowsComponent from './RowsComponent'
function Header() {
  return (
    <div className='Header'>
        <Sidebar/>
        <div className='body'>
          <div className='Name'>
            <p>Hi, Jennie Moss</p>
          </div>
          <Cards/>
          <RowsComponent/>
        </div>
       
        

    </div>
    
  )
}

export default Header
