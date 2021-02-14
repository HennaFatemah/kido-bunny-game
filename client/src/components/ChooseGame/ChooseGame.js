import React from 'react';
import Slider from './Slider';
import Paw from '../../assets/cursor/white-paw-new.png';
import './ChooseGame.scss'
import { useHistory } from "react-router-dom";

const ChooseGame = () => {
    const history = useHistory();
    return (
        <div className="choose">
            <div className="choose__head-container">
                    <h1 className="choose__primary-head">Hello Friends</h1>
                    <h2 className="choose__secondary-head">Choose Your Game</h2>
                    <div className="choose__instruction-container">
                        <h2 className="choose__instruction">Instructions</h2>
                        <h3 className="choose__pointers"><span><img className="choose__paw-img"src={Paw} alt='paw pointer'/></span>Click on your favorite bunny to play the game</h3>
                        <h3 className="choose__pointers"><span><img className="choose__paw-img" src={Paw} alt='paw pointer'/></span>Click on the arrows to change the slide</h3>
                    </div>
                    <button className="choose__back" onClick={() => history.push("/")}>Go Back To Home Page</button>
                </div>
            <Slider className="choose__part" />
        </div>
    );
};

export default ChooseGame;