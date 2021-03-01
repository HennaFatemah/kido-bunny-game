import React, { useState, useRef, useEffect } from 'react';
import './confetti.scss'
import Confetti from "react-confetti";

const Confettiwork = () => {
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confettiRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setHeight(confettiRef.current.clientHeight);
        setWidth(confettiRef.current.clientWidth);
    }, [])

    const handleShow = toggle => {
        setShow(toggle)
    }


    return (
        <div className ="confetti-wrap"
            ref={confettiRef}
            onMouseEnter={() => handleShow(true)}>
            <Confetti 
            recycle ={true}
            numberOfPieces={80}
            width={width}
            height={height}
            />
        </div>
    );
};

export default Confettiwork;