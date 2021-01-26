import React from 'react';
import Slider from './Slider';
import Paw from '../../assets/cursor/yellow-paw-new.png';
import './ChooseGame.scss'

const ChooseGame = () => {
    return (
        <div className="choose">
            <div className="choose__head-container">
                    <h1 className="choose__primary-head">Hello Friends,</h1>
                    <h2 className="choose__secondary-head">Choose Your Game</h2>
                    <div className="choose__instruction-container">
                        <h2 className="choose__instruction">Instructions</h2>
                        <h3 className="choose__pointers"><span><img className="choose__paw-img"src={Paw} alt='paw pointer'/></span>Click on your favorite pup to play the game</h3>
                        <h3 className="choose__pointers"><span><img className="choose__paw-img" src={Paw} alt='paw pointer'/></span>Click on the arrows to change the slide</h3>
                    </div>
                </div>
            <Slider className="choose__part" />
        </div>
    );
};

export default ChooseGame;