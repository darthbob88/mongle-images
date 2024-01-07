import React from 'react';
import { ImagePixelated } from "react-pixelate";
import './App.css';

function App({ imgSrc, pixelSize = 10 }: { imgSrc: string, pixelSize?: number }) {
  return (
    <div className="App">
      <header className="App-header">
        <ImagePixelated src={imgSrc} pixelSize={pixelSize} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
