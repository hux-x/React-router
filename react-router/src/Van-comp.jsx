import React from 'react'
import './Van-comp.css'
import exampleImg from './starry-sky.jpg' 
import { Link } from 'react-router-dom';
export default function VanComp(props) {
    let {title,price,category,imageSource} = props;
  return (
    <Link title = {props.title}to={`/vans/${props.id}` } style={{textDecoration : 'none',color:'beige'}}>
    <div className='van-comp' style={{padding : '15px',width : '40vw',borderRadius: '15px'}}>
        <img src={props.imageSource} style={{width : '30vw',height:'30vh'}}/>
        <div className="conv" style={{display : 'flex',gap : '10%',margin : '5px'}}>
        <p> <b>{title}</b></p>
        <p>{price+'/day'}</p>
        </div>
        <button style={{width : '100%'}}>{category}</button>
    </div>
    </Link>
  )
}
