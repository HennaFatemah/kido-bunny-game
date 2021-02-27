import React, { Component } from 'react';
import Creator from '../components/Creator/Creator';
import './Home.scss'
import ClickMe from '../components/Home/ClickMe';
import StartGame from '../components/Home/StartGame';
import Background from '../assets/mainImages/close-barn-scenery.png';
import BackgroundAfter from '../assets/mainImages/open-barn-scenery.png';
import Tractor from '../assets/mainImages/tractor-girl copy.png';
import {Howl, Howler} from "howler";
import Audio from "../assets/sounds/buttons.mp3";

const audioClip = [
    {sound: Audio, label:<ClickMe/>}
]
class Home extends Component {
    state = {
        scale: 1
    }
    backgroundState = () => {
        return this.state.scale === 2.5 ? BackgroundAfter : Background;
    }
    clickButton = () => {
        return this.state.scale === 2.5 ? <StartGame/> : this.renderButtonAndSound()
    }
    zoomIn = () => {
        this.setState({scale: 2.5});
    }

    soundPlay = (src) =>{
        const sound = new Howl({
            src 
        })
            sound.play();
    }

    renderButtonAndSound = () =>{
        return audioClip.map((soundObj, index) =>{
            return(
                <button className="container__btn" key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                    {soundObj.label}
                </button>
            )
        })
    }

    render() {
        Howler.volume(1.0)
        return (
            <div className="container">
                <Creator/>
                <div className="container__tractor-path">
                    <img src={Tractor} className="container__tractor" />
                </div>
                <div
                className="container__bg-image-wrapper"
                style={{ 'backgroundImage': `url(${this.backgroundState()})`, 'transform': `scale(${this.state.scale})`, 'transition': '3s' }}>
                    <button className="container__btn" onClick={this.zoomIn}>
                        {this.clickButton()}
                    </button>
                    <div className="container__bunny-pop">
                        <span className="container__bunny container__bunny--berry"></span>
                        <span className="container__bunny container__bunny--flippy"></span>
                        <span className="container__bunny container__bunny--venger"></span>
                        <span className="container__bunny container__bunny--toughy"></span>
                        <span className="container__bunny container__bunny--naut"></span>
                        <span className="container__bunny container__bunny--muse"></span>
                    </div>
                </div>
            </div>
        );
    }
}  

export default Home;