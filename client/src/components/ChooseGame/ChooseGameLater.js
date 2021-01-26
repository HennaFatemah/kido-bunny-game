import './ChooseGame.scss';
import { Link } from 'react-router-dom';
import Skye from '../../assets/pups/skye.png';
import Zuma from '../../assets/pups/zuma-paw-patrol-png-41900.png';
import Marshal from '../../assets/pups/new-marshal-paw-patrol-png.png';
import Everest from '../../assets/pups/everest-paw-patrol-png-41896.png';
import RiderOne from '../../assets/rider/rider-angle-1.png';
import RiderTwo from '../../assets/rider/rider-angle-2.png';
import RiderMain from '../../assets/rider/rider-paw-patrol-png-41895.png'
import Paw from '../../assets/cursor/white-paw-new.png';

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
        const LinkLeave = () => {
            this.setState({riderPosition: 3})
        }
        return (
            <div className="home">
            <div className="home__head-container">
                <h1 className="home__primary-head">Hello Friends,</h1>
                <h2 className="home__secondary-head">Choose Your Game</h2>
                <div className="home__instruction-container">
                    <h2 className="home__instruction">Instructions</h2>
                    <h3 className="home__pointers"><span><img className="home__paw-img"src={Paw} alt='paw pointer'/></span>Click on your favorite pup to play the game</h3>
                    <h3 className="home__pointers"><span><img className="home__paw-img" src={Paw} alt='paw pointer'/></span>Click on the numbers to change the slides</h3>
                </div>
            </div>
            {this.state.riderPosition === 1 ? <img className="home__rider-up" src={RiderOne} alt="Rider with hand up"/> : this.state.riderPosition === 2 ? <img className="home__rider-down" src={RiderTwo} alt="Rider with hand down"/> : this.state.riderPosition === 3 ? <img className="home__rider-main" src={RiderMain} alt="Rider dancing"/> : <img className="home__rider-main" src={RiderMain} alt="Rider dancing"/>}
            {/* Slider --start */}
            <div className="home__slider">
                {/* Slides --start */}
                <div className="home__slides">
                    <input 
                        type="radio" 
                        name="radio-btn" 
                        id="radio1"
                    />
                    <input 
                        type="radio" 
                        name="radio-btn" 
                        id="radio2"
                    />
                    {/* Business slide */}
                        <div className="home__slide home__slide-one">
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
                    {/* Customer slide */}
                        <div className="home__slide home__slide-two">
                            <div className="game__tile-up" onMouseOver={LinkTo} onMouseLeave={LinkLeave}>
                                <h3 className="game__tile-title">Exercise with Everest</h3>
                                <Link className="game__link" to='/choosegame/exercise'>
                                    <img className="game__tile-pic" src={Everest} alt="Pup named Rider"/>
                                </Link>
                            </div>
                            <div className="game__tile-down" onMouseOver={LinkDown} onMouseLeave={LinkLeave}>
                                <h3 className="game__tile-title">Scavenger Hunt with Marshal</h3>
                                <Link className="game__link" to='/choosegame/scavengerhunt'>
                                <img className="game__tile-pic" src={Marshal} alt="Pup named Marshal"/>
                                </Link>
                            </div>
                        </div>
                        {/* Third slide */}
                        <div className="home__slide home__slide-three">
                            <div className="game__tile-up" onMouseOver={LinkTo} onMouseLeave={LinkLeave}>
                                <h3 className="game__tile-title">Sight words with rocky</h3>
                                <Link className="game__link" to='/choosegame/sightwords'>
                                    {/* <img className="game__tile-pic" src={Rocky} alt="Pup named Rocky"/> */}
                                </Link>
                            </div>
                            <div className="game__tile-down" onMouseOver={LinkDown} onMouseLeave={LinkLeave}>
                                <h3 className="game__tile-title">General Knowledge with Chase</h3>
                                <Link className="game__link" to='/choosegame/generalknowledge'>
                                {/* <img className="game__tile-pic" src={Chase} alt="Pup named Chase"/> */}
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