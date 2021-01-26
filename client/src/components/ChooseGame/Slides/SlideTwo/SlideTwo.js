
import {Link} from 'react-router-dom';
import Marshal from '../../../../assets/pups/new-marshal-paw-patrol-png.png';
import Everest from '../../../../assets/pups/everest-paw-patrol-png-41896.png';
import RiderOne from '../../../../assets/rider/rider-angle-1.png';
import RiderTwo from '../../../../assets/rider/rider-angle-2.png';
import RiderMain from '../../../../assets/rider/rider-paw-patrol-png-41895.png'
import './SlideTwo.scss'


import React, { Component } from 'react';

class SlideTwo extends Component {
    state = {
        riderPosition:0
    }
    render() {
        const LinkTo = () => {
            this.setState({riderPosition: 1})
        }
        const LinkDown = () => {
            this.setState({riderPosition: 2})
        }
        const LinkLeave = () => {
            this.setState({riderPosition: 3})
        }
        return (
            <div className="slide-two">
                {this.state.riderPosition === 1 ? <img className="slide-two__rider-up" src={RiderOne} alt="Rider with hand up"/> : this.state.riderPosition === 2 ? <img className="slide-two__rider-down" src={RiderTwo} alt="Rider with hand down"/> : this.state.riderPosition === 3 ? <img className="slide-two__rider-main" src={RiderMain} alt="Rider dancing"/> : <img className="slide-two__rider-main" src={RiderMain} alt="Rider dancing"/>}
                <div className="slide-two__tile" onMouseOver={LinkTo} onMouseLeave={LinkLeave}>
                    <h3 className="slide-two__tile-title">Exercise with Marshal</h3>
                    <Link className="slide-two__link" to='/choosegame/exercise'>
                        <img className="slide-two__tile-pic" src={Marshal} alt="Pup named Marshal"/>
                    </Link>
                </div>
                <div className="slide-two__tile" onMouseOver={LinkDown} onMouseLeave={LinkLeave}>
                    <h3 className="slide-two__tile-title">Scavenger hunt with Everest</h3>
                    <Link className="slide-two__link" to='/choosegame/scavengerhunt'>
                        <img className="slide-two__tile-pic" src={Everest} alt="Pup named Everest"/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SlideTwo;