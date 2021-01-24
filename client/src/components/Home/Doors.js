import React from 'react';
import './Doors.scss';
import GateLeft from '../../assets/mainImages/lookout-tower-gate-1.png'
import GateRight from '../../assets/mainImages/lookout-tower-gate-2.png'
import {Link} from 'react-router-dom';

const Doors = () => {
    return (
        <div className="doors__container">
                        <div className="doors__reveal-wrapper">
                            <div className="doors__reveal-content">
                                <Link to="/choosegame"><button className="doors__game">Start New Game</button></Link>
                                <div className="doors__reveal-left">
                                    <img className="doors__door-left" src={GateLeft} alt="left gate"/>
                                </div>
                                <div className="doors__reveal-right">
                                    <img className="doors__door-right" src={GateRight} alt="right gate"/>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default Doors;