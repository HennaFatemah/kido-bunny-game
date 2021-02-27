import './StartGame.scss';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Howl, Howler} from "howler";
import Audio from "../../assets/sounds/buttons.mp3";

const audioClip = [
    {sound: Audio, label:'Start'}
]

class StartGame extends Component {
    soundPlay = (src) =>{
        const sound = new Howl({
            src 
        })
            sound.play();
    }

    renderButtonAndSound = () =>{
        return audioClip.map((soundObj, index) =>{
            return(
                <Link to="/choosegame" className="start" key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                    <button className="start__btn">{soundObj.label}</button>
                </Link>
            )
        })
    }

    render() {
        Howler.volume(1.0)
        return (
            <>
                {this.renderButtonAndSound()}
            </>
        );
    }
}

export default StartGame;
const Start = () => {
    return (
        <button>
            Start
        </button>
    );
};