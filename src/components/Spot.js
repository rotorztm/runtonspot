import React, { useState, useEffect, useCallback } from 'react';

function Spot({user}) {
    const [spot, setSpot] = useState({});
    useEffect(() => {
        fetch('http://localhost:4000/api/spot/next', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: user })
        })
            .then(response => response.json())
            .then(data => setSpot(data))
            .catch(donnees=> console.log(donnees));
    },{});
   
    return (
        <div>
            <img alt="#" src={spot.imageUrl}></img>
        </div>
    )

}

export default Spot;