import React, { useState, useCallback, useEffect } from 'react';
import Upload from "../components/Upload";
import './App.css';

function transformUploads(uploads) {
  console.log('Uploads',uploads);
  return uploads.map(u => ({
    original: u.imageUrl
  }));
}

function App() {
  const [spots, setSpots] = useState(null);

  //Ici je veux récupérer les spots non répondus par l'utilisateur courant
  const fetchUploads = useCallback(() => {
    fetch('http://localhost:4000/api/spots')
      .then(response => response.json().then(data => setSpots(transformUploads(data))))
      .catch(console.error)
  }, []);

  useEffect(() => {
    fetchUploads();
  }, [fetchUploads])
  console.log(spots);
  return (
    <>
      <div className="container">
        <div className="upload-container">
          <Upload fetchUploads={fetchUploads} />
        </div>
      </div>
      <div className="container">
     
      </div>
    </>
  );
}

export default App;