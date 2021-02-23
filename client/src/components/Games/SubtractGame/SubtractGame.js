import React, { useState } from 'react';
import './SubtractGame.scss'
import BunnyRight from '../../../assets/pups/bunny-fllipy-right.png';
import BunnyLeft from '../../../assets/pups/bunny-fllipy-left.png';
import FlippyStraight from '../../../assets/pups/bunny-fllipy.png';
import ZumaTwo from '../../../assets/pups/zuma-2.png';
import ZumaSit from '../../../assets/pups/zuma-paw-patrol-png-41900.png';
import Bubbles from '../../../assets/icons/bubble.png'
import {questions} from './SubtractGameData';
import SeaPortion from '../../../assets/mainImages/sea-portion.png';
import { useHistory } from "react-router-dom";
import BackArrow from '../../../assets/icons/back-arrow.svg';

export default function SubtractGame() {
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
        <section className='subtract'>
            <div className="add__back-container">
            <button className="subtract__back" onClick={() => history.push("/choosegame")}><img src={BackArrow} alt="Sitting pup called Skye" className="subtract__back-pic" />Go Back</button>
                        <button className="subtract__back" onClick={() => history.push("/")}><img src={BackArrow} alt="Sitting pup called Skye" className="subtract__back-pic" /><img src={BackArrow} alt="Sitting pup called Skye" className="subtract__back-pic" />Home</button>
                        </div>
            <div className='subtract__card'>
                {showScore ? (
                    <>
                    <div className='subtract__score-section'>
                        <p>You scored {score} out of {questions.length}</p>
                    </div>
                    <img src={FlippyStraight} alt="Sitting pup called Skye" className="subtract__pic--score" />
                    <button className="subtract__btn" onClick={refreshPage}>Start Again</button>
                    </>
                ) : (
                    <>
                        {questions[currentQuestion].id === 1 ? <><img src={BunnyRight} alt="Flying pup called Skye" className="subtract__pic subtract__pic--one" /><img src={Bubbles} alt="Flying pup called Skye" className="subtract__bubbles subtract__bubbles--one" /></>: questions[currentQuestion].id === 2 ? <><img src={BunnyRight} alt="Flying pup called Skye" className="subtract__pic subtract__pic--two" /><img src={Bubbles} alt="Flying pup called Skye" className="subtract__bubbles subtract__bubbles--two" /></>: questions[currentQuestion].id === 3 ? <><img src={BunnyLeft} alt="Flying pup called Skye" className="subtract__pic subtract__pic--three" /><img src={Bubbles} alt="Flying pup called Skye" className="subtract__bubbles subtract__bubbles--three" /></>: questions[currentQuestion].id === 4 ? <><img src={BunnyRight} alt="Flying pup called Skye" className="subtract__pic subtract__pic--four" /><img src={Bubbles} alt="Flying pup called Skye" className="subtract__bubbles subtract__bubbles--four" /></>: questions[currentQuestion].id === 5 ? <><img src={BunnyLeft} alt="Flying pup called Skye" className="subtract__pic subtract__pic--five" /><img src={Bubbles} alt="Flying pup called Skye" className="subtract__bubbles subtract__bubbles--five" /></>: questions[currentQuestion].id === 6 ? <><img src={BunnyRight} alt="Flying pup called Skye" className="subtract__pic subtract__pic--six" /><img src={Bubbles} alt="Flying pup called Skye" className="subtract__bubbles subtract__bubbles--six" /></>: questions[currentQuestion].id === 7 ? <><img src={BunnyLeft} alt="Flying pup called Skye" className="subtract__pic subtract__pic--seven" /><img src={Bubbles} alt="Flying pup called Skye" className="subtract__bubbles subtract__bubbles--seven" /></>: questions[currentQuestion].id === 8 ? <><img src={BunnyRight} alt="Flying pup called Skye" className="subtract__pic subtract__pic--eight" /><img src={Bubbles} alt="Flying pup called Skye" className="subtract__bubbles subtract__bubbles--eight" /></>: questions[currentQuestion].id === 9 ? <><img src={BunnyLeft} alt="Flying pup called Skye" className="subtract__pic subtract__pic--nine" /><img src={Bubbles} alt="Flying pup called Skye" className="subtract__bubbles subtract__bubbles--nine" /></>: questions[currentQuestion].id === 10 ? <><img src={FlippyStraight} alt="Sitting pup called Skye" className="subtract__pic subtract__pic--ten" /><img src={Bubbles} alt="Flying pup called Skye" className="subtract__bubbles subtract__bubbles--ten" /></>: null}
                        <div className='subtract__question-section'>
                            <div className='subtract__question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='subtract__question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='subtract__answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className="subtract__btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
            </section>
	);
}

{/* <img src={Bubbles} alt="Bubbles" className="subtract__bubbles subtract__bubbles--one" /> */}