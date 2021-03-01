import React, { useState, useRef, useEffect } from 'react';
import './Confetti.scss'
import Confetti from "react-confetti";

const Confettiwork = () => {
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confettiRef = useRef(null);

    useEffect(() => {
        setHeight(confettiRef.current.clientHeight);
        setWidth(confettiRef.current.clientWidth);
    }, [])

    return (
        <div className ="confetti-wrap"
            ref={confettiRef}>
            <Confetti 
            recycle ={true}
            numberOfPieces={180}
            width={width}
            height={height}
            />
        </div>
    );
};

export default Confettiwork;