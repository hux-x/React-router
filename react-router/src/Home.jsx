import React from 'react'
import './Home.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'
export default function 
() {
  return (
    <>

    <div className='Home-comp'>
      
        <div className="shade">
          <h1 className='intro-text'>You got the travel plans,<br/>
            we got the travel vans.
          </h1>
          <h2 className='front'><span>Add adventure to your life by joining the 
            #VANLIFE movement.</span> <br/>Rent the perfect van
            for your perfect road trip.
          </h2>
        
          <Link className='find-van' to={'/vans'}><button className='to-vans'>Find your van</button></Link>
          <p>© 2024 #VANLIFE</p>
        </div>
    </div>
    </>
  )
}
