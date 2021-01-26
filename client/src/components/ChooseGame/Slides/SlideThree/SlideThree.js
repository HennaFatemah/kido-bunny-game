
import {Link} from 'react-router-dom';
import Rocky from '../../../../assets/pups/new-marshal-paw-patrol-png.png';
import Chase from '../../../../assets/pups/everest-paw-patrol-png-41896.png';
import RiderOne from '../../../../assets/rider/rider-angle-1.png';
import RiderTwo from '../../../../assets/rider/rider-angle-2.png';
import RiderMain from '../../../../assets/rider/rider-paw-patrol-png-41895.png'
import './SlideThree.scss'


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
            <div className="slide-three">
                {this.state.riderPosition === 1 ? <img className="slide-three__rider-up" src={RiderOne} alt="Rider with hand up"/> : this.state.riderPosition === 2 ? <img className="slide-three__rider-down" src={RiderTwo} alt="Rider with hand down"/> : this.state.riderPosition === 3 ? <img className="slide-three__rider-main" src={RiderMain} alt="Rider dancing"/> : <img className="slide-three__rider-main" src={RiderMain} alt="Rider dancing"/>}
                <div className="slide-three__tile" onMouseOver={LinkTo} onMouseLeave={LinkLeave}>
                    <h3 className="slide-three__tile-title">Sight Words With Rocky</h3>
                    <Link className="slide-three__link" to='/choosegame/sightwords'>
                        <img className="slide-three__tile-pic" src={Rocky} alt="Pup named Rocky"/>
                    </Link>
                </div>
                <div className="slide-three__tile" onMouseOver={LinkDown} onMouseLeave={LinkLeave}>
                    <h3 className="slide-three__tile-title">General Knowledge with Chase</h3>
                    <Link className="slide-three__link" to='/choosegame/generalknowledge'>
                        <img className="slide-three__tile-pic" src={Chase} alt="Pup named Chase"/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SlideTwo;