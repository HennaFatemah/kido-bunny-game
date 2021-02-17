import React, { Component } from 'react';
import Creator from '../components/Creator/Creator';
import './Home.scss'
import ClickMe from '../components/Home/ClickMe';
import StartGame from '../components/Home/StartGame';
import Background from '../assets/mainImages/close-barn-scencery-division-with-burrows.png';
import BackgroundAfter from '../assets/mainImages/open-barn-scenery.png';
import Tractor from '../assets/mainImages/tractor-girl copy.png'
class Home extends Component {
    state = {
        scale: 1
    }
    backgroundState = () => {
        return this.state.scale === 2.5 ? BackgroundAfter : Background;
    }
    clickButton = () => {
        return this.state.scale === 2.5 ? <StartGame/> : <ClickMe/>
    }
    zoomIn = () => {
        this.setState({scale: 2.5});
    }
    render() {
        return (
            <div className="container">
                <Creator/>
                <div className="container__tractor-path">
                        <img src={Tractor} className="container__tractor" />
                    </div>
                <div
                className="container__bg-image-wrapper"
                style={{ 'backgroundImage': `url(${this.backgroundState()})`, 'transform': `scale(${this.state.scale})`, 'transition': '3s' }}>
                    
                    <button className="container__game container__game--zoom" onClick={this.zoomIn}>
                    {this.clickButton()}
                    </button>
                        <div className="container__bunny-pop">
                            <div className="container__hole">
                                <span className="container__span1">
                                </span>
                            </div>
                        </div>
                        <div className="container__bunny-pop container__bunny-pop--two">
                            <div className="container__hole container__hole--two">
                                <span className="container__span1 container__span1--two"></span>
                            </div>
                        </div>
                        <div className="container__bunny-pop container__bunny-pop--three">
                            <div className="container__hole container__hole--three">
                                <span className="container__span1 container__span1--three"></span>
                            </div>
                        </div>
                        <div className="container__bunny-pop container__bunny-pop--four">
                            <div className="container__hole container__hole--four">
                                <span className="container__span1 container__span1--four"></span>
                            </div>
                        </div>
                        <div className="container__bunny-pop container__bunny-pop--five">
                            <div className="container__hole container__hole--five">
                                <span className="container__span1 container__span1--five"></span>
                            </div>
                        </div>
                        <div className="container__bunny-pop container__bunny-pop--six">
                            <div className="container__hole container__hole--six">
                                <span className="container__span1 container__span1--six"></span>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}  

export default Home;