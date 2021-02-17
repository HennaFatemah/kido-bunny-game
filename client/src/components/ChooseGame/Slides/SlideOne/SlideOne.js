
import {Link} from 'react-router-dom';
import Skye from '../../../../assets/pups/bunny-berry-wings-close.png';
import Zuma from '../../../../assets/pups/bunny-fllipy.png';
import RiderOne from '../../../../assets/rider/rider-angle-1.png';
import RiderTwo from '../../../../assets/rider/rider-angle-2.png';
import RiderMain from '../../../../assets/rider/rider-paw-patrol-png-41895.png'
import './SlideOne.scss'


import React, { Component } from 'react';

class SlideOne extends Component {
    state = {
        riderPosition:0
    }
    render() {
        
        return (
            <div className="slide-one">
                <Link className="slide-one__link" to='/choosegame/addgame'>
                    <div className="slide-one__tile" >
                        <h3 className="slide-one__tile-title slide-one__tile-title--berry">Add with Bunny Berry</h3>
                        <img className="slide-one__tile-pic slide-one__tile-pic--berry" src={Skye} alt="Pup named Skye"/>
                    </div>
                </Link>
                <Link className="slide-one__link" to='/choosegame/subtractgame'>
                    <div className="slide-one__tile slide-one__tile--flippy" >
                        <h3 className="slide-one__tile-title">Subtract with Bunny Flippy</h3>
                        <img className="slide-one__tile-pic slide-one__tile-pic--flippy" src={Zuma} alt="Pup named Zuma"/>
                    </div>
                </Link>
            </div>
        );
    }
}

export default SlideOne;