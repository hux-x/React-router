import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './Hostlayout.css'

export default function Hostlayout() {
  return (
    <>
    <div className='HostLayout-comp'>
      <div id="links">
         <Link to={'/host/reviews'} className='path-link'>Reviews</Link>
      <div></div>
      <Link to={'/host/income'} className='path-link'>Income</Link>
      <div></div>
      <Link to={'/host/dashboard'} className='path-link'>dashboard</Link>
    </div>
    <Outlet/>
    </div>
   
    </>
  )
}
