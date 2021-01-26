import React, { Component } from 'react';
import Carousel, {consts} from "react-elastic-carousel";
import Item from "./Item";
import "./Slider.scss";
import SlideOne from './Slides/SlideOne/SlideOne';
import SlideTwo from './Slides/SlideTwo/SlideTwo';
import SlideThree from './Slides/SlideThree/SlideThree';
import Left from '../../assets/mainImages/left-arrow.svg';
import Right from '../../assets/mainImages/right.svg';


class Slider extends Component {
    myArrow({ type, onClick, isEdge }) {
              const pointer = type === consts.PREV ? <img className="arrow" src={Left} alt="left arrow"/> : <img className="arrow" src={Right} alt="right arrow"/>
              return (
                <button className="button" onClick={onClick} disabled={isEdge}>
                  {pointer}
                </button>
              )
            }
    

    render() {
        const breakPoints = [
            { width: 70, itemsToShow: 1 }
        ];
        return (
            <>
            <div className="game">
                <Carousel 
                    breakPoints={breakPoints}
                    renderArrow={this.myArrow}
                >
                    <Item><SlideOne/></Item>
                    <Item><SlideTwo/></Item>
                    <Item><SlideThree/></Item>
                    <Item>Coming Soon</Item>
                </Carousel>
            </div>
        </>
        );
    }
}

export default Slider;