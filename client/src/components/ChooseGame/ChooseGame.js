import React from 'react';
import Slider from './Slider';
import './ChooseGame.scss'
import { useHistory } from "react-router-dom";
import BackArrow from '../../assets/icons/back-arrow-white.svg';

const ChooseGame = () => {
    const history = useHistory();
    return (
        <div className="choose">
            <div className="choose__head-container">
                <h1 className="choose__primary-head">Hello Friends</h1>
                <h2 className="choose__secondary-head">Choose Your Game</h2>
                <div className="choose__instruction-container">
                    <h2 className="choose__instruction">Instructions</h2>
                    <h3 className="choose__pointers">➤ Click on your favorite bunny to play the game</h3>
                    <h3 className="choose__pointers">➤ Click on the arrows to change the slide</h3>
                </div>
                <button className="choose__back" onClick={() => history.push("/")}><img src={BackArrow} alt="Sitting pup called Skye" className="choose__back-pic" /><img src={BackArrow} alt="Sitting pup called Skye" className="choose__back-pic" />Home</button>
            </div>
            <Slider className="choose__part" />
        </div>
    );
};
export default ChooseGame;