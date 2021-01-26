import React from 'react';
import Slider from './Slider';
import Paw from '../../assets/cursor/yellow-paw-new.png';
import './ChooseGame.scss'

const ChooseGame = () => {
    return (
        <div className="home">
            <div className="home__head-container">
                    <h1 className="home__primary-head">Hello Friends,</h1>
                    <h2 className="home__secondary-head">Choose Your Game</h2>
                    <div className="home__instruction-container">
                        <h2 className="home__instruction">Instructions</h2>
                        <h3 className="home__pointers"><span><img className="home__paw-img"src={Paw} alt='paw pointer'/></span>Click on your favorite pup to play the game</h3>
                        <h3 className="home__pointers"><span><img className="home__paw-img" src={Paw} alt='paw pointer'/></span>Click on the arrows to change the slide</h3>
                    </div>
                </div>
            <Slider className="home__part" />
        </div>
    );
};

export default ChooseGame;