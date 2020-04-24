import React, { useEffect, useState } from 'react';

import { listImages } from './services/images';
import logo from './logo.svg';
import './App.css';

function App() {
  const [images, setImages] = useState();

  useEffect(() => {
    if (images) return;

    (async () => {
      const _images = await listImages();

      setImages(_images);
    })();
  })


  return (
    <div className="App">
      {images && images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          style={
            { 
              marginBottom: '10px' 
            }
          }
        />
      ))}
    </div>
  );
}

export default App;
