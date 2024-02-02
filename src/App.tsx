import React, { useState } from 'react';
import './App.css';
import SingleImage from './SingleImage/SingleImage';

function App() {
  const [imgSrc, setImgSrc] = useState<string>('https://upload.wikimedia.org/wikipedia/commons/1/1e/Fritz_Haber.png');
  const [pixelSize, setPixelSize] = useState<number>(10);
  return (
    <div className="App">
      <label> Pixel size:     <input type='number' value={pixelSize} onChange={(evt) => setPixelSize(evt.target.valueAsNumber)} />
      </label>
      <br />
      <label>Image source:   <input type='text' value={imgSrc} onChange={(evt) => setImgSrc(evt.currentTarget.value)} /></label>
      <br />
      <SingleImage imgSrc={imgSrc} pixelSize={pixelSize} />
    </div>
  );
}

export default App;
