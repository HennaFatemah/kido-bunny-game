import './StartGame.scss';
import React from 'react';
import {Link} from 'react-router-dom';

const StartGame = () => {
    return (
        <Link to="/choosegame" className="start">Start</Link>
    );
};

export default StartGame;