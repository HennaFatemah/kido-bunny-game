import './StartGame.scss';
import React from 'react';
import {Link} from 'react-router-dom';

const StartGame = () => {
    return (
        <>
        <Link className="start" to="/choosegame">Start</Link>
        {/* <Link className="start" to="/readstory">Read A Story</Link> */}
        </>
    );
};

export default StartGame;