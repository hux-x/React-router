import React from 'react'
import './About.css'
import starrySky from './starry-sky.jpg'
import capmerVan from './van.png';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
export default function 
() {
  return (
    <>
    <Outlet/>
        <div className="container">
          
        <img src={starrySky}  alt='the image failed to load' id='front-image'/>
          <h2 className='about-title'>Don't squeeze in a sedan when <br/>when you could relax in a van </h2>
          <p className='exp'>Our mission is to enliven your road trip with the perfect van rental. Our vans are recertifeid before each trip to ensure that your travel plans go off without a hitch.
          </p>
          <p  id='exp-two'>
            Our team is full of enthusiasts who know first hand: the magic of travelling the world on four wheels. 
          </p>
          <div id="explore-vans">
            <h2>Your destination is<br/> waiting. Your van is ready.</h2>
            <div className='van-flex'>
            <button>Explore our vans</button>
            <img  src = {capmerVan}/>
            </div>
          </div>
        </div>
        </>
  )
}
