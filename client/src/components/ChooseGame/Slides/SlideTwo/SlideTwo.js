
import {Link} from 'react-router-dom';
import BunnyToughy from '../../../../assets/pups/bunny-toughy.png';
import BunnyVenger from '../../../../assets/pups/bunny-venger.png';
import './SlideTwo.scss'
import React from 'react';

const SlideTwo = () => {
    return (
        <div className="slide-two">
            <div className="slide-two__tile">
                <h3 className="slide-two__tile-title slide-two__tile-title--toughy">Exercise with Bunny Toughy</h3>
                <Link className="slide-two__link" to='/choosegame/exercisegame'>
                    <img className="slide-two__tile-pic slide-two__tile-pic--toughy" src={BunnyToughy} alt="Bunny named Toughy"/>
                </Link>
            </div>
            <div className="slide-two__tile">
                <h3 className="slide-two__tile-title slide-two__tile-title--venger">Scavenger hunt with Bunny Venger</h3>
                <Link className="slide-two__link" to='/choosegame/scavengerhunt'>
                    <img className="slide-two__tile-pic slide-two__tile-pic--venger" src={BunnyVenger} alt="Bunny named Venger"/>
                </Link>
            </div>
        </div>
    );
};

export default SlideTwo;