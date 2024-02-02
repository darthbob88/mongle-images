/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { ImagePixelated } from 'react-pixelate';

type SingleImageProps = {
    imgSrc: string;
    pixelSize: number
};

function SingleImage({ imgSrc, pixelSize }: SingleImageProps) {
    const [errorText, setErrorText] = useState<string>("");

    return (
        <div style={{ border: "1px solid red", width: "60vw", margin: "0 auto" }}>
            <p>{errorText}</p>
            <img src={imgSrc} onError={() => setErrorText(`Unable to load from ${imgSrc}`)} />
            <ImagePixelated src={imgSrc} pixelSize={pixelSize} />
        </div>
    );
}

export default SingleImage;