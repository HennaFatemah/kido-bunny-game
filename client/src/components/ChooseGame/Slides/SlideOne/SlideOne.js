
import {Link} from 'react-router-dom';
import BunnyBerry from '../../../../assets/pups/bunny-berry.png';
import BunnyFlippy from '../../../../assets/pups/bunny-flippy.png';
import './SlideOne.scss'
import React from 'react';

const SlideOne = () => {
    return (
        <div className="slide-one">
                <Link className="slide-one__link" to='/choosegame/addgame'>
                    <div className="slide-one__tile" >
                        <h3 className="slide-one__tile-title slide-one__tile-title--berry">Add with Bunny Berry</h3>
                        <img className="slide-one__tile-pic slide-one__tile-pic--berry" src={BunnyBerry} alt="Bunny named Berry"/>
                    </div>
                </Link>
                <Link className="slide-one__link" to='/choosegame/subtractgame'>
                    <div className="slide-one__tile slide-one__tile--flippy" >
                        <h3 className="slide-one__tile-title slide-one__tile-title--flippy">Subtract with Bunny Flippy</h3>
                        <img className="slide-one__tile-pic slide-one__tile-pic--flippy" src={BunnyFlippy} alt="Bunny named Flippy"/>
                    </div>
                </Link>
            </div>
    );
};

export default SlideOne;