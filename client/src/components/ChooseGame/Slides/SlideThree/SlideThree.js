
import {Link} from 'react-router-dom';
import BunnyNaut from '../../../../assets/pups/bunny-naut.png';
import BunnyMuse from '../../../../assets/pups/bunny-muse.png';
import './SlideThree.scss'
import React from 'react';

const SlideThree = () => {
    return (
        <div className="slide-three">
            <Link className="slide-three__link" to='/choosegame/sightwords'>
                <div className="slide-three__tile">
                    <h3 className="slide-three__tile-title slide-three__tile-title--naut">Sight Words With Bunny Naut</h3>
                    
                    <img className="slide-three__tile-pic slide-three__tile-pic--naut" src={BunnyNaut} alt="Bunny named Naut"/>
                </div>
            </Link>
            <Link className="slide-three__link" to='/choosegame/soundgame'>
                <div className="slide-three__tile">
                    <h3 className="slide-three__tile-title slide-three__tile-title--muse">Sounds with Bunny Muse</h3>
                    <img className="slide-three__tile-pic slide-three__tile-pic--muse" src={BunnyMuse} alt="Bunny named Muse"/>
                </div>
            </Link>
        </div>
    );
};

export default SlideThree;