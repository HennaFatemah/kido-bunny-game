import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import Audio from "../../../assets/sounds/buttons.mp3";

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
            <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>
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