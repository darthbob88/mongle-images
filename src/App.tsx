/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { ImagePixelated } from "react-pixelate";
import './App.css';

function App() {
  const [imgSrc, setImgSrc] = useState<string>('https://upload.wikimedia.org/wikipedia/commons/1/1e/Fritz_Haber.png');
  const [pixelSize, setPixelSize] = useState<number>(10);
  const [errorText, setErrorText] = useState<string>("")
  return (
    <div className="App">
      <label> Pixel size:     <input type='number' value={pixelSize} onChange={(evt) => setPixelSize(evt.target.valueAsNumber)} />
      </label>
      <br />
      <label>Image source:   <input type='text' value={imgSrc} onChange={(evt) => setImgSrc(evt.currentTarget.value)} /></label>
      <br />
      <div>{errorText}</div>
      <img src={imgSrc} onError={() => setErrorText(`Unable to load from ${imgSrc}`)} />
      <ImagePixelated src={imgSrc} pixelSize={pixelSize} />
    </div>
  );
}

export default App;
