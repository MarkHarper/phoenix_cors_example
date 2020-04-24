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
      {images && images.map(image => (
        <img
          src={image.url}
          style={
            { 
              width: '200px', 
              height: '200px', 
              marginBottom: '10px' 
            }
          }
        />
      ))}
    </div>
  );
}

export default App;
