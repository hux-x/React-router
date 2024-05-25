import React from 'react'
import "./Nav.css"
import { Link, Outlet } from 'react-router-dom'
export default function 
(props) {
  let widthx = props.comp? 'maxWdith' : 'minWdith';
  return (
    <>
    <div className='nav'>
       
            <div className='title'>
            <Link style={{textDecoration : 'none',color:'#f5b553'}} to={'/home'}> <h2 className='top'>#VANLIFE</h2></Link>
            </div>
            <div className="links">
                <Link to = {'/vans'}><button className="home">Vans</button></Link>
               
                <Link to={'/host'}><button className="about">Host</button></Link>
            </div>
    </div>
    <Outlet/>
    </>
  )
}
