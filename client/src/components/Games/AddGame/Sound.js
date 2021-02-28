import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import Audio from "../../../assets/sounds/buttons.mp3";
import './Sound.scss';
import {questions} from './AddGameData';

const audioClip = [
    {sound: Audio, label: <p>{questions.correct}</p>}
]

class Sound extends Component {
    state = {
        currentQuestion : 0
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
            <button className="game-sound" key={index} onClick={() => this.soundPlay(soundObj.sound)}>
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