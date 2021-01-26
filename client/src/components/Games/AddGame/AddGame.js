import React, { Component } from 'react';
import axios from 'axios';
import TestOne from './TestOne';
import './DrivingLicencePractice.scss';
// import Success from '../../../../../assets/driveTest/success.gif';
import { Link } from 'react-router-dom';

class DrivingLicencePractice extends Component {
    state = {
        generalKnowledgeTest: [],
        score:0,
        responses:0
    }
    componentDidMount() {
        axios.get("http://localhost:8080/notes").then((response) => {
            this.setState({ 
                generalKnowledgeTest: response.data
            });
        })
    }
    computeAnswer(answer, correctAnswer, cardId){
        console.log(answer,correctAnswer)
        console.log(this.state.generalKnowledgeTest)
            const filteredCard = this.state.generalKnowledgeTest.map(card=>{
                if (card.id === cardId){
                    console.log(cardId);
                    return {
                        ...card, 
                        options: [answer]
                    }
                }
                return card;
            })
            this.setState({
                generalKnowledgeTest: filteredCard
            })
        if(answer === correctAnswer){
            
            this.setState({
                score:this.state.score + 1
            }, () => {console.log('score is', this.state.score)})
        }
        this.setState({
            responses:this.state.responses < 11 ? this.state.responses + 1 : 11
        })
    }

    handleLogOut = () => {
        sessionStorage.removeItem('authToken');
    }
    
    render() {
        return(
            <div className="driving__score">{this.state.responses < 10 ? 
            <div className="driving">
                <h4 className="driving__title">Drive Test One</h4>
                {this.state.generalKnowledgeTest && this.state.responses < 11 && <TestOne testOne={this.state.generalKnowledgeTest} select={(answer,correctAnswer, cardId) => this.computeAnswer(answer,correctAnswer, cardId)}
                />}
                {this.state.responses === 10 ? <h2>{this.state.score}</h2> : null}
            </div> : <div className="flex">
                <p className="driving__score-text"><strong>Your score is</strong><br/>{this.state.score}<br/>out of 10</p>
            </div>
        }</div>
        )}
}

export default DrivingLicencePractice;