import React, { useState, useCallback, useEffect } from 'react';
// import Upload from "../components/Upload";
import './App.css';
import Navigation from '../components/Navigation';
import Connexion from '../components/Connexion/Connexion';
import CreerCompte from '../components/Connexion/CreerCompte';
import 'tachyons';

function transformUploads(spots) {
  console.log('Uploads', spots);
  return spots.map(u => ({
    original: u.imageUrl
  }));
}

function App() {
  const [spots, setSpots] = useState(null);
  const [user, setUser] = useState(null);
  const [isSignedIn, setSignIn] = useState(false);
  const [route, setRoute] = useState("signin");

  const onRouteChanged = (route) =>{
    setRoute(route);
  
  }

  const onConnect = (user) =>{
    setUser(user);
    setRoute("home");
    setSignIn(true);
  
  }

  //Ici je veux récupérer les spots non répondus par l'utilisateur courant
  const fetchUploads = useCallback(() => {
    fetch('http://localhost:4000/api/spots')
      .then(response => response.json().then(data => setSpots(transformUploads(data))))
      .catch(console.error)
  }, []);

  // useEffect(() => {
  //   fetchUploads();
  // }, [fetchUploads])
  // console.log(spots);
  return (
    <>
      <Navigation isSignedIn={isSignedIn} user={user} />
      {
        isSignedIn ?
          <div className="container">
            <div className="upload-container">
              {/* <Upload fetchUploads={fetchUploads} /> */}
            </div>
          </div> :
          
           <div className="container">
             {
               route ==="signin" ?
                <Connexion onConnect={onConnect} onRouteChanged={onRouteChanged} /> :
                <CreerCompte onRouteChanged={onRouteChanged} />
             }
             
           </div>

      }
     
    </>
  );
}

export default App;