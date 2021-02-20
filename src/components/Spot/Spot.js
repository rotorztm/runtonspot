import React, { useState, useEffect } from 'react';
import SpotReponse from './SpotReponse';
import SpotParams from './SpotParams';
import NoMoreSpot from './NoMoreSpot';
import './Spot.css';
function Spot({ user }) {
    const [spot, setSpot] = useState(undefined);
    const [reponse, setReponse] = useState({});

    const getNextSpot = () => {
        fetch('http://localhost:4000/api/spot/next', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: user })
        })
            .then(response => {
                if (response.ok) {
                    console.log(reponse);
                    return response.json()
                }
                else {
                    return Promise.reject('error 404')
                }
            }
            )
            .then(data => {
                console.log(data);
                setSpot(data);
                setReponse({
                    user_id: user.id,
                    spot_id: data.id,
                    details: ''
                })
            }
            )
            .catch(donnees =>
                {
                    setReponse({});
                    setSpot(undefined);
                }
            );
    }

    useEffect(() => {
        getNextSpot()
    }, []);


    const soumettreReponse = () => {
        fetch('http://localhost:4000/api/spot/answer', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                reponse: reponse
            })
        })
            .then(() => getNextSpot());
    }

    const onReponseChange = (event) => {
        reponse.details = event.target.value;
        setReponse(reponse);
    }

    return (

        <div className="mainSpot">
            {
                spot ?
                    <div>
                        <div className="spotParam">
                            <SpotParams spot={spot} />
                        </div>
                        <div className="spotImage tc">
                            <img src={spot.imageUrl} alt="A bright blue sky" className="" />
                        </div>
                        <div className="spotReponse">
                            <SpotReponse reponse={reponse} onReponseChange={onReponseChange} soumettreReponse={soumettreReponse} />
                        </div>
                        <div className="spotNext ">
                            <a class=" tc w-100 f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">Prochain spot</a>
                        </div>
                    </div>
                    :
                    <NoMoreSpot />
            }

        </div>


    )

}

export default Spot;