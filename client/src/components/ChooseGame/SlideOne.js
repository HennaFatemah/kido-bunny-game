
import {Link} from 'react-router-dom';
import Skye from '../../assets/pups/skye.png';
import Zuma from '../../assets/pups/zuma-paw-patrol-png-41900.png';
import RiderOne from '../../assets/rider/rider-angle-1.png';
import RiderTwo from '../../assets/rider/rider-angle-2.png';
import RiderMain from '../../assets/rider/rider-paw-patrol-png-41895.png'
import './SlideOne.scss'


import React, { Component } from 'react';

class AddWithSkye extends Component {
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
            <div className="home__slide home__slide-one">
                {this.state.riderPosition === 1 ? <img className="home__rider-up" src={RiderOne} alt="Rider with hand up"/> : this.state.riderPosition === 2 ? <img className="home__rider-down" src={RiderTwo} alt="Rider with hand down"/> : this.state.riderPosition === 3 ? <img className="home__rider-main" src={RiderMain} alt="Rider dancing"/> : <img className="home__rider-main" src={RiderMain} alt="Rider dancing"/>}
                            <div className="game__tile-up" onMouseOver={LinkTo} onMouseLeave={LinkLeave}>
                                <h3 className="game__tile-title">Add with Skye</h3>
                                <Link className="game__link" to='/choosegame/addgame'>
                                    <img className="game__tile-pic" src={Skye} alt="Pup named Skye"/>
                                </Link>
                            </div>
                            <div className="game__tile-down" onMouseOver={LinkDown} onMouseLeave={LinkLeave}>
                                <h3 className="game__tile-title">Subtract with Zuma</h3>
                                <Link className="game__link" to='/choosegame/subtractgame'>
                                    <img className="game__tile-pic" src={Zuma} alt="Pup named Zuma"/>
                                </Link>
                            </div>
                        </div>
        );
    }
}

export default AddWithSkye;