
import {Link} from 'react-router-dom';
import Skye from '../../../../assets/pups/Color-bunny-1.png';
import Zuma from '../../../../assets/pups/zuma-paw-patrol-png-41900.png';
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
            <div className="slide-one">
                {this.state.riderPosition === 1 ? <img className="slide-one__rider-up" src={RiderOne} alt="Rider with hand up"/> : this.state.riderPosition === 2 ? <img className="slide-one__rider-down" src={RiderTwo} alt="Rider with hand down"/> : this.state.riderPosition === 3 ? <img className="slide-one__rider-main" src={RiderMain} alt="Rider dancing"/> : <img className="slide-one__rider-main" src={RiderMain} alt="Rider dancing"/>}
                <Link className="slide-one__link" to='/choosegame/addgame'>
                    <div className="slide-one__tile" onMouseOver={LinkTo} onMouseLeave={LinkLeave}>
                        <h3 className="slide-one__tile-title">Add with Bunny Berry</h3>
                        <img className="slide-one__tile-pic" src={Skye} alt="Pup named Skye"/>
                    </div>
                </Link>
                <Link className="slide-one__link" to='/choosegame/subtractgame'>
                    <div className="slide-one__tile" onMouseOver={LinkDown} onMouseLeave={LinkLeave}>
                        <h3 className="slide-one__tile-title">Subtract with Zuma</h3>
                        <img className="slide-one__tile-pic" src={Zuma} alt="Pup named Zuma"/>
                    </div>
                </Link>
            </div>
        );
    }
}

export default SlideOne;