import React, { useState } from 'react';
import './SubtractGame.scss'
import Zuma from '../../../assets/pups/bunny-flippy-angle-2.png';
import ZumaOne from '../../../assets/pups/zuma-1.png';
import ZumaTwo from '../../../assets/pups/zuma-2.png';
import ZumaSit from '../../../assets/pups/zuma-paw-patrol-png-41900.png';
import Bubbles from '../../../assets/icons/bubble.png'
import {questions} from './SubtractGameData';
import SeaPortion from '../../../assets/mainImages/sea-portion.png';
import { useHistory } from "react-router-dom";

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
            <div className="subtract__front-bg">
                <img className="subtract__sea-portion" src={SeaPortion} alt="portion of the sea"/>
            </div>
            <div className='subtract__card'>
                {showScore ? (
                    <>
                    <div className='subtract__score-section'>
                        <p>You scored {score} out of {questions.length}</p>
                    </div>
                    <img src={ZumaSit} alt="Sitting pup called Skye" className="subtract__pic--score" />
                    <button className="subtract__btn" onClick={refreshPage}>Start Again</button>
                    </>
                ) : (
                    <>
                        {questions[currentQuestion].id === 1 ? <><img src={Bubbles} alt="Bubbles" className="subtract__bubbles subtract__bubbles--one" /><img src={Zuma} alt="Flying pup called Skye" className="subtract__pic subtract__pic--one" /></>: questions[currentQuestion].id === 2 ? <img src={Zuma} alt="Flying pup called Skye" className="subtract__pic subtract__pic--two" />: questions[currentQuestion].id === 3 ? <img src={Zuma} alt="Flying pup called Skye" className="subtract__pic subtract__pic--three" />: questions[currentQuestion].id === 4 ? <img src={Zuma} alt="Flying pup called Skye" className="subtract__pic subtract__pic--four" />: questions[currentQuestion].id === 5 ? <img src={ZumaOne} alt="Flying pup called Skye" className="subtract__pic subtract__pic--five" />: questions[currentQuestion].id === 6 ? <img src={ZumaOne} alt="Flying pup called Skye" className="subtract__pic subtract__pic--six" />: questions[currentQuestion].id === 7 ? <img src={ZumaTwo} alt="Flying pup called Skye" className="subtract__pic subtract__pic--seven" />: questions[currentQuestion].id === 8 ? <img src={ZumaOne} alt="Flying pup called Skye" className="subtract__pic subtract__pic--eight" />: questions[currentQuestion].id === 9 ? <img src={Zuma} alt="Flying pup called Skye" className="subtract__pic subtract__pic--nine" />: questions[currentQuestion].id === 10 ? <img src={Zuma} alt="Sitting pup called Skye" className="subtract__pic subtract__pic--ten" />: null}
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
                        <button className="choose__back" onClick={() => history.push("/choosegame")}>Go Back</button>
                        <button className="choose__back" onClick={() => history.push("/")}>Home</button>
                    </>
                )}
            </div>
            </section>
	);
}