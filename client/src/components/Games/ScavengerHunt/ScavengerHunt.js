import React, { useState } from 'react';
import './ScavengerHunt.scss'
import Marshal from '../../../assets/pups/new-marshal-paw-patrol-png.png';
import MarshalHop from '../../../assets/pups/MARSHAL-HOP.png';
import MarshalSquat from '../../../assets/pups/squods-marshall.png';
import MarshalTongue from '../../../assets/pups/marshal-tongue.png';
import SkyeHappy from '../../../assets/pups/happy-skye.png';
import {questions} from './ScavengerHuntData';
import { useHistory } from "react-router-dom";

export default function ScavengerHunt() {
    const history = useHistory();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
    };
    function refreshPage(){
        window.location.reload();
    } 

	return (
        <section className='hunt'>
            <div className='hunt__card'>
                {showScore ? (
                    <>
                    <div className='hunt__score-section'>
                        <p>You scored {score} out of {questions.length}</p>
                    </div>
                    <img src={MarshalTongue} alt="Sitting pup called Skye" className="hunt__pic--score" />
                    <button className="hunt__btn" onClick={refreshPage}>Start Again</button>
                    </>
                ) : (
                    <>
                        {questions[currentQuestion].id === 1 ? <img src={Marshal} alt="pup called Marshal" className="hunt__pic hunt__pic--one" />: questions[currentQuestion].id === 2 ? <img src={Marshal} alt="Flying pup called Skye" className="hunt__pic hunt__pic--two" />: questions[currentQuestion].id === 3 ? <img src={Marshal} alt="Flying pup called Skye" className="hunt__pic hunt__pic--three" />: questions[currentQuestion].id === 4 ? <img src={MarshalHop} alt="Flying pup called Skye" className="hunt__pic hunt__pic--four" />: questions[currentQuestion].id === 5 ? <img src={MarshalSquat} alt="Flying pup called Skye" className="hunt__pic hunt__pic--five" />:  null}
                        <div className='hunt__question-section'>
                            <div className='hunt__question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='hunt__question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='hunt__answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className="hunt__btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                        <button className="choose__back" onClick={() => history.push("/choosegame")}>Go Back</button>
                        <button className="choose__back" onClick={() => history.push("/")}>Home</button>
                    </>
                )}
            </div>
            </section>
	);
}