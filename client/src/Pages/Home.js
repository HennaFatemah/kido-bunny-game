import React, { Component } from 'react';

import './Home.scss'
import ClickMe from '../components/Home/ClickMe';
import OpenDoor from '../components/Home/OpenDoor';
import Doors from '../components/Home/Doors';

class Home extends Component {
    state = {
        scale: 1
    }
    ClickButton = () => {
        return this.state.scale === 4 ? <OpenDoor/> : <ClickMe/>
    }
    zoomIn = () => {
        this.setState({scale: 4});
    }
    render() {
        return (
            <div className="container">
                <button className="container__game container__game--zoom" onClick={this.zoomIn}>
                    {this.ClickButton()}
                </button>
                <div
                className="container__bg-image-wrapper"
                style={{ 'transform': `scale(${this.state.scale})` }}>
                    <Doors/>
                </div>
                <div className="container__content">
                </div>
            </div>
        );
    }
}  

export default Home;