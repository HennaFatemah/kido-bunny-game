import React, { Component } from 'react';
import Creator from '../components/Creator/Creator';
import './Home.scss'
import ClickMe from '../components/Home/ClickMe';
import StartGame from '../components/Home/StartGame';
import Background from '../assets/mainImages/close-barn-scenery-transparent.png';
import BackgroundAfter from '../assets/mainImages/open-barn-scenery.png';
import Hole from '../assets/hole/burroh-bottom.png';
import HoleBack from '../assets/hole/burroh-back.png';
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
                    <img className="container__hole-back-pic" src={HoleBack} />
                    <img className="container__hole-pic" src={Hole} />
                    <b className="container__hole">
                        
                        <span className="container__span1">

                        </span>
                    </b>
                    </div>
                    <div className="container__bunny-pop container__bunny-pop--two">
                    <img className="container__hole-back-pic container__hole-back-pic--two" src={HoleBack} />
                    <img className="container__hole-pic container__hole-pic--two" src={Hole} />
                    <b className="container__hole container__hole--two">
                        
                        <span className="container__span1 container__span1--two">

                        </span>
                    </b>
                    </div>
                    <div className="container__bunny-pop container__bunny-pop--three">
                    <img className="container__hole-back-pic container__hole-back-pic--three" src={HoleBack} />
                    <img className="container__hole-pic container__hole-pic--three" src={Hole} />
                    <b className="container__hole container__hole--three">
                        
                        <span className="container__span1 container__span1--three">

                        </span>
                    </b>
                    </div>
                    <div className="container__bunny-pop container__bunny-pop--four">
                    <img className="container__hole-back-pic container__hole-back-pic--four" src={HoleBack} />
                    <img className="container__hole-pic container__hole-pic--four" src={Hole} />
                    <b className="container__hole container__hole--four">
                        
                        <span className="container__span1 container__span1--four">

                        </span>
                    </b>
                    </div>
                    {/* <div className="container__clearfix"></div> */}
                </div>
            </div>
        );
    }
}  

export default Home;