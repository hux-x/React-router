import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './VanDescription.css';

export default function VanDescription(props) {
  const params = useParams();
  const [vanInfo, setVanInfo] = useState(null); 

  useEffect(() => {
    const fetchVanData = async () => {
      try {
        const response = await fetch(`/api/vans/${params.id}`);
        const data = await response.json();
        console.log(data.vans);
        setVanInfo(data.vans);
      } catch (error) {
        console.error('Error fetching van data:', error);
      }
    };

    if (params.id) { // Guard against undefined params.id
      fetchVanData();
    }
  }, [params.id]); // Add params.id to dependency array

  // Conditional rendering to handle vanInfo being null or undefined
  return (
    <div className='VanDescription'>
      {vanInfo && (
        <> 
       <Link to={'/vans'}> <div className="goback">
        <span id='goback-arrow'>←</span>
          <p className='VanDesc-goBack'> back to all vans</p>
          </div>
          </Link>
          <img src={vanInfo.imageUrl} id='Description-image' style={{ width: '90vw',height : '50vh' }} />
          <h2 id='VanDesc-title'>{vanInfo.name}</h2>
          <h2 id='VanDesc-price'>${vanInfo.price}/day</h2>
          <h2 id='VanDesc-about'>About van </h2>
          <p id='VanDesc-description'>{vanInfo.description}</p>
          <button id='VanDesc-rent'>Rent this van</button>
          <p id='company'>© 2024 #VANLIFE</p>
        </>
      )}
    </div>
  );
}

