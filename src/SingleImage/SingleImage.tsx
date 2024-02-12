/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { ImagePixelated } from 'react-pixelate';

type SingleImageProps = {
    pixelSize: number;
};

function SingleImage({ pixelSize }: SingleImageProps) {
    const [errorText, setErrorText] = useState<string>("");
    const [imgSrc, setImgSrc] = useState<string>('https://upload.wikimedia.org/wikipedia/commons/1/1e/Fritz_Haber.png');

    return (
        <div style={{ border: "1px solid red", width: "60vw", margin: "0 auto" }}>
            <label>Image source:   <input type='text' value={imgSrc} onChange={(evt) => setImgSrc(evt.currentTarget.value)} /></label>
            <p>{errorText}</p>
            <br />

            <img src={imgSrc} onError={() => setErrorText(`Unable to load from ${imgSrc}`)} />
            <ImagePixelated src={imgSrc} pixelSize={pixelSize} />
        </div>
    );
}

export default SingleImage;