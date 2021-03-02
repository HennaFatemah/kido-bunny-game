import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import Audio from "../../../../assets/sounds/goat.mp3";
import './Sound.scss';

const audioClip = [
    {sound: Audio, label:'Audio'}
]

class Sound extends Component {
    soundPlay = (src) =>{
        const sound = new Howl({
            src 
        })
            sound.play();
    }

    renderButtonAndSound = () =>{
        return audioClip.map((soundObj, index) =>{
            return(
                <button className="btn" key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                    {soundObj.label}
                </button>
            )
        })
    }

    render() {
        Howler.volume(1.0)
        return (
            <div>
                {this.renderButtonAndSound()}
            </div>
        );
    }
}

export default Sound;