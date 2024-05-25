import React, { useEffect, useReducer, useState } from 'react'
import './vans.css'
import VanComp from './Van-comp'
import './server'
import { Link } from 'react-router-dom';

export default function Vans(props) {
  const reducer = (state, action) => {
    switch(action.type) {
      case "FILTER":
        return   state.filter(van => van.type == action.payload)
        
      case "DEFAULT":
        return  action.payload
      
      default:
        return state;
    }
  };
  let [state,disptach] = useReducer(reducer,[])
  let [vandata,setVanData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("/api/vans/");
    const data = await response.json();
    console.log(data.vans)
    disptach({type : "DEFAULT",payload : data.vans})
    setVanData(data.vans)
    console.log(vandata);
  };
  useEffect(() => {
    fetchData();
   
  }, []);
  return (
    
    <div className='vans' style={{padding : '10px',backgroundColor: '#854836',color:'#f5b553'}}>
      <h2 className='vans-title' style={{textAlign:'left',padding: '10px',color: '#f5b553'}}>Explore our van options</h2>
    <ul className='van-categories' style={{display : 'flex',listStyle:'none',justifyContent: 'space-evenly'}}>
    <li className='filter' onClick={()=>{disptach({type : "FILTER", payload : "simple"})}}>Simple</li>
    <li className='filter'  onClick={()=>{disptach({type : "FILTER", payload : "luxury"})}}>Luxury</li>
    <li className='filter'  onClick={()=>{disptach({type : "FILTER", payload : "rugged"})}}>Rugged</li>
    <li className='filter clear' style={{marginLeft : '20px'}}  onClick={()=>{disptach({type : "DEFAULT",payload : vandata})}}>clear filters</li>
    </ul>
    <div className="container-vans" style={{marginTop : '5vh',padding : '20px'}}>
    {
      state.map((van)=>{
        return <VanComp id = {van.id} category = {van.type} title = {van.name} price = {'$'+van.price} imageSource = {van.imageUrl}/>      })
    }
    </div>
    </div>
  
  )
}
