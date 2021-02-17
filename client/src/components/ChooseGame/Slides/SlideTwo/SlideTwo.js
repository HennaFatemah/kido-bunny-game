
import {Link} from 'react-router-dom';
import Marshal from '../../../../assets/pups/bunny-toughy.png';
import Everest from '../../../../assets/pups/bunny-venger.png';
import './SlideTwo.scss'


import React, { Component } from 'react';

class SlideTwo extends Component {
    render() {
        return (
            <div className="slide-two">
                <div className="slide-two__tile">
                    <h3 className="slide-two__tile-title slide-two__tile-title--toughy">Exercise with Bunny Toughy</h3>
                    <Link className="slide-two__link" to='/choosegame/exercisegame'>
                        <img className="slide-two__tile-pic slide-two__tile-pic--toughy" src={Marshal} alt="Pup named Marshal"/>
                    </Link>
                </div>
                <div className="slide-two__tile">
                    <h3 className="slide-two__tile-title">Scavenger hunt with Bunny Venger</h3>
                    <Link className="slide-two__link" to='/choosegame/scavengerhunt'>
                        <img className="slide-two__tile-pic slide-two__tile-pic--venger" src={Everest} alt="Pup named Everest"/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SlideTwo;