import React, { useState } from 'react';
import './SightWordsGame.scss'
import BunnyNaut from '../../../assets/pups/bunny-naut.png';
import {questions} from './SightWordsGameData';
import BackArrow from '../../../assets/icons/back-arrow.svg';
import { useHistory } from "react-router-dom";
import Confetti from '../Confetti/Confetti';

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
        <section className='space'>
            <div className="space__back-container">
                <button className="space__back" onClick={() => history.push("/choosegame")}><img src={BackArrow} alt="Back Arrow" className="space__back-pic" />Go Back</button>
                <button className="space__back" onClick={() => history.push("/")}><img src={BackArrow} alt="Back Arrow" className="space__back-pic" /><img src={BackArrow} alt="Back Arrow" className="space__back-pic" />Home</button>
            </div>
            <div className="space__bg">
                <div className='space__card'>
                    {showScore ? (
                        <>
                            <div className='space__score-section'>
                                <p>You scored {score} out of {questions.length}</p>
                            </div>
                            <img src={BunnyNaut} alt="Sitting pup called Skye" className="space__pic--score" />
                            <button className="space__btn" onClick={refreshPage}>Start Again</button>
                            <Confetti/>
                        </>
                    ) : (
                        <>
                            {questions[currentQuestion].id === 1 ? <><img src={BunnyNaut} alt="bunny called naut" className="space__pic space__pic--one" /></>: questions[currentQuestion].id === 2 ? <><img src={BunnyNaut} alt="bunny called naut" className="space__pic space__pic--two" /></>: questions[currentQuestion].id === 3 ? <img src={BunnyNaut} alt="bunny called naut" className="space__pic space__pic--three" />: questions[currentQuestion].id === 4 ? <img src={BunnyNaut} alt="bunny called naut" className="space__pic space__pic--four" />: questions[currentQuestion].id === 5 ? <img src={BunnyNaut} alt="bunny called naut" className="space__pic space__pic--five" />:  questions[currentQuestion].id === 6 ? <img src={BunnyNaut} alt="bunny called naut" className="space__pic space__pic--six" />:questions[currentQuestion].id === 7 ? <img src={BunnyNaut} alt="bunny called naut" className="space__pic space__pic--seven" />:questions[currentQuestion].id === 8 ? <img src={BunnyNaut} alt="bunny called naut" className="space__pic space__pic--eight" />:questions[currentQuestion].id === 9 ? <img src={BunnyNaut} alt="bunny called naut" className="space__pic space__pic--nine" />:questions[currentQuestion].id === 10 ? <img src={BunnyNaut} alt="bunny called naut" className="space__pic space__pic--ten" />:null}
                            <div className='space__question-section'>
                                <div className='space__question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='space__question-text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='space__answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button className="space__btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
            </section>
	);
}