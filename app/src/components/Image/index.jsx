import React, { Component, useCallback, useState, useRef } from "react";
import styled from 'styled-components';

const overlayStyles = {
	position: "absolute",
	filter: "blur(1px)",
	transition: "opacity ease-in 1000ms",
    clipPath: "inset(0)",
    backgroundColor: "gray"
};

const UnstyledImage = ({ className, onClick, overlaySrc, src}) => {
    const [highResImageLoaded, setHighResImageLoaded] = useState(false);

    const setHighResImageLoadedTrue = useCallback(() => setHighResImageLoaded(true), [src]);
    
    const imageRef = useRef(null);

    console.log("image loaded? ", highResImageLoaded);

	return (
        <span className={className} onClick={onClick}>
            <img
                onLoad={setHighResImageLoadedTrue}
                ref={imageRef}
                src={src}
                width={150}
            />
            <div
                className={overlayStyles}
                {...highResImageLoaded && { style: { opacity: "0" } }}
                src={overlaySrc}
                width={150}
            />
        </span>
    );
};

const Image = styled(UnstyledImage)`
    width: 100% !important;
    height: auto !important;
    transition: transform .2s;
`;

export default Image;