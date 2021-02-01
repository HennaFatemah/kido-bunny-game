import React, { Component } from 'react';
import Creator from '../components/Creator/Creator';
import './Home.scss'
import ClickMe from '../components/Home/ClickMe';
import StartGame from '../components/Home/StartGame';
import Background from '../assets/mainImages/new-lookout-tower.png';
import BackgroundAfter from '../assets/mainImages/lookout-tower-new.png';
class Home extends Component {
    state = {
        scale: 1
    }
    backgroundState = () => {
        return this.state.scale === 3.5 ? BackgroundAfter : Background;
    }
    clickButton = () => {
        return this.state.scale === 3.5 ? <StartGame/> : <ClickMe/>
    }
    zoomIn = () => {
        this.setState({scale: 3.5});
    }
    render() {
        return (
            <div className="container">
                <Creator/>
                <button className="container__game container__game--zoom" onClick={this.zoomIn}>
                    {this.clickButton()}
                </button>
                <div
                className="container__bg-image-wrapper"
                style={{ 'backgroundImage': `url(${this.backgroundState()})`, 'transform': `scale(${this.state.scale})`, 'transition': '3s' }}>
                </div>
            </div>
        );
    }
}  

export default Home;