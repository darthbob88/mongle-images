import React, { useState } from 'react';
import './App.css';
import SingleImage from './SingleImage/SingleImage';

function App() {
  const [pixelSize, setPixelSize] = useState<number>(10);
  return (
    <div className="App">
      <label> Pixel size:     <input type='number' value={pixelSize} onChange={(evt) => setPixelSize(evt.target.valueAsNumber)} />
      </label>
      <br />
      <SingleImage pixelSize={pixelSize} />
    </div>
  );
}

export default App;
