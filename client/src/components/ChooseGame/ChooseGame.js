import './ChooseGame.scss';
import { Link } from 'react-router-dom';
import Skye from '../../assets/pups/skye.png';
import RiderOne from '../../assets/rider/rider-angle-1.png';
import RiderTwo from '../../assets/rider/rider-angle-2.png';
import RiderMain from '../../assets/rider/rider-paw-patrol-png-41895.png'

import React, { Component } from 'react';

class ChooseGame extends Component {
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
        return (
            <div className="home">
            {this.state.riderPosition === 1 ? <img className="home__rider-up" src={RiderOne} alt="Rider with hand up"/> : this.state.riderPosition === 2 ? <img className="home__rider-down" src={RiderTwo} alt="Rider with hand down"/> : <img className="home__rider-down" src={RiderMain} alt="Rider dancing"/>}
            {/* Slider --start */}
            <div className="home__slider">
                {/* Slides --start */}
                <div className="home__slides">
                    {/* <h1 className="game__title">Hi Friends</h1>
                    <h2 className="game__title">Choose Your Game</h2> */}
                    {/* inputs */}
                    <label>
                    <input 
                        type="radio" 
                        name="radio-btn" 
                        id="radio1"
                    />
                    </label>
                    <input 
                        type="radio" 
                        name="radio-btn" 
                        id="radio2"
                    />
                    {/* Business slide */}
                        <div className="home__slide home__slide-one">
                            <div className="game__tile-up" onClick={LinkTo}>
                                <h3 className="game__tile-title">Addition Math with Skye</h3>
                                <Link className="game__link" to='/choosegame/addgame'>
                                    <img className="game__tile-pic" src={Skye} alt="Pup named Skye"/>
                                </Link>
                            </div>
                            <div className="game__tile-down" onClick={LinkDown}>
                                <h3 className="game__tile-title">Subtraction Math with Zuma</h3>
                                <Link className="game__link" to='/choosegame/subtractgame'>
                                    {/* <img className="game__tile-pic" src={Zuma} alt="Pup named Zuma"/> */}
                                </Link>
                            </div>
                        </div>
                    {/* Customer slide */}
                        <div className="home__slide home__slide-two">
                            <div className="game__tile game__tile--rider-up">
                                <h3 className="game__tile-title">Exercise with Rider</h3>
                                <Link className="game__link" to='/choosegame/exercise'>
                                    {/* <img className="game__tile-pic" src={Rider} alt="Pup named Rider"/> */}
                                </Link>
                            </div>
                            <div className="game__tile game__tile--rider-down">
                                <h3 className="game__tile-title">Scavenger Hunt with Marshal</h3>
                                <Link className="game__link" to='/choosegame/scavengerhunt'>
                                {/* <img className="game__tile-pic" src={Marshal} alt="Pup named Marshal"/> */}
                                </Link>
                            </div>
                        </div>
                    <div className="home__navigation-auto">
                        <div className="home__navigation-auto-container home__auto-btn1"></div>
                        <div className="home__navigation-auto-container home__auto-btn2"></div>
                    </div>
                </div>
                <div class="home__navigation-manual">
                    <label htmlFor="radio1" className="home__manual-btn"></label>
                    <label htmlFor="radio2" className="home__manual-btn"></label>
                </div>
            </div>
        </div>
        );
    }
}

export default ChooseGame;

{/*<div className="game__div">
                <div className="game__tile">
                    <h3 className="game__tile-title">Exercise with Rider</h3>
                    <Link className="game__link" to='/choosegame/exercise'>
                        <img className="game__tile-pic" src={Rider} alt="Pup named Rider"/>
                    </Link>
                </div>
                <div className="game__tile">
                    <h3 className="game__tile-title">Scavenger Hunt with Marshal</h3>
                    <Link className="game__link" to='/choosegame/scavengerhunt'>
                        <img className="game__tile-pic" src={Marshal} alt="Pup named Marshal"/>
                    </Link>
                </div>
            </div>
            <div className="game__div">
                <div className="game__tile">
                    <h3 className="game__tile-title">Sight Words with Rocky</h3>
                    <Link className="game__link" to='/choosegame/sightwords'>
                        <img className="game__tile-pic" src={Rocky} alt="Pup named Rocky"/>
                    </Link>
                </div>
                <div className="game__tile">
                    <h3 className="game__tile-title">General Knowledge with Chase</h3>
                    <Link className="game__link" to='/choosegame/generalknowledge'>
                        <img className="game__tile-pic" src={Chase} alt="Pup named Chase"/>
                    </Link>
                </div>
            </div>
            <Link to='/'  className="game__go-back">Go Back</Link> */}