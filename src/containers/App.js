import React, { useState, useCallback, useEffect } from 'react';
import Upload from "../components/Upload";
import Gallery from "../components/Gallery"
import './App.css';

function transformUploads(uploads) {
  return uploads.map(u => ({
    original: u.imageUrl,
    thumbnail: u.thumbnailUrl
  }));
}

function App() {
  const [images, setImages] = useState(null);

  const fetchUploads = useCallback(() => {
    fetch('http://localhost:4000/api/uploads')
      .then(response => response.json().then(data => setImages(transformUploads(data))))
      .catch(console.error)
  }, []);

  useEffect(() => {
    fetchUploads();
  }, [fetchUploads])

  return (
    <>
      <div className="container">
        <div className="upload-container">
          <Upload fetchUploads={fetchUploads} />
        </div>
      </div>
      <div className="container">
        <div className="gallery-container">
          {images && images.length ? (
            <Gallery images={images} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;