import React, { useState } from 'react';
import './ExerciseGame.scss'
import Marshal from '../../../assets/pups/bunny-toughy.png';
import MarshalHop from '../../../assets/pups/bunny-toughy.png';
import MarshalSquat from '../../../assets/pups/bunny-toughy.png';
import MarshalTongue from '../../../assets/pups/bunny-toughy.png';
import SkyeHappy from '../../../assets/pups/happy-skye.png';
import {questions} from './ExerciseGameData';
import { useHistory } from "react-router-dom";
import BackArrow from '../../../assets/icons/back-arrow.svg';

export default function ExerciseGame() {
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
        <section className='exercise'>
            <div className="exercise__back-container">
            <button className="exercise__back" onClick={() => history.push("/choosegame")}><img src={BackArrow} alt="Sitting pup called Skye" className="exercise__back-pic" />Go Back</button>
                        <button className="exercise__back" onClick={() => history.push("/")}><img src={BackArrow} alt="Sitting pup called Skye" className="exercise__back-pic" /><img src={BackArrow} alt="Sitting pup called Skye" className="exercise__back-pic" />Home</button>
                        </div>
            <div className='exercise__card'>
                {showScore ? (
                    <>
                    <div className='exercise__score-section'>
                        <p>You scored {score} out of {questions.length}</p>
                    </div>
                    <img src={MarshalTongue} alt="Sitting pup called Skye" className="exercise__pic--score" />
                    <button className="exercise__btn" onClick={refreshPage}>Start Again</button>
                    </>
                ) : (
                    <>
                        {questions[currentQuestion].id === 1 ? <img src={Marshal} alt="pup called Marshal" className="exercise__pic exercise__pic--one" />: questions[currentQuestion].id === 2 ? <img src={Marshal} alt="Flying pup called Skye" className="exercise__pic exercise__pic--two" />: questions[currentQuestion].id === 3 ? <img src={Marshal} alt="Flying pup called Skye" className="exercise__pic exercise__pic--three" />: questions[currentQuestion].id === 4 ? <img src={MarshalHop} alt="Flying pup called Skye" className="exercise__pic exercise__pic--four" />: questions[currentQuestion].id === 5 ? <img src={MarshalSquat} alt="Flying pup called Skye" className="exercise__pic exercise__pic--five" />:  null}
                        <div className='exercise__question-section'>
                            <div className='exercise__question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='exercise__question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='exercise__answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className="exercise__btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
            </section>
	);
}