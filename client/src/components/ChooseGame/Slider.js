import React, { Component } from 'react';
import Carousel, {consts} from "react-elastic-carousel";
import Item from "./Item";
import "./Slider.scss";
import SlideOne from './SlideOne';
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
                    <Item>Two</Item>
                    <Item>Three</Item>
                    <Item>Four</Item>
                    <Item>Five</Item>
                    <Item>Six</Item>
                    <Item>Seven</Item>
                    <Item>Eight</Item>
                </Carousel>
            </div>
        </>
        );
    }
}

export default Slider;