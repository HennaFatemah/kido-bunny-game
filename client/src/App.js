import React, { Component } from 'react';
import './App.scss';
// import Background from './assets/mainImages/background-image.jpg'
import GateLeft from './assets/mainImages/lookout-tower-gate-1.png'
import GateRight from './assets/mainImages/lookout-tower-gate-2.png'

class App extends Component {
  state = {
    scale: 1,
  }
  
  zoomIn = () => {
     this.setState({ scale: this.state.scale * 4 });
  }
  zoomOut = () => {
    this.setState({ scale: this.state.scale / 4 });
  }
  render() {
    return (
      <div className="container">
        {/* <img className="container__background" src={Background} alt="Background"/> */}
        <div
          className="container__bg-image-wrapper"
          style={{ 'transform': `scale(${this.state.scale})` }}
        />
        <div className="container__left-gate-ctnr">
          <img className="container__left-gate" src={GateLeft} alt="left gate"/>
        </div>
        <div className="container__right-gate-ctnr">
          <img className="container__right-gate" src={GateRight} alt="right gate"/>
        </div>
        <div className="container__content">
          <button className="container__click" onClick={this.zoomIn}>Click on the <br/>LOOKOUT TOWER</button>
          <button onClick={this.zoomOut}>Exit</button>
        </div>
      </div>
    );
  }
}
export default App;
