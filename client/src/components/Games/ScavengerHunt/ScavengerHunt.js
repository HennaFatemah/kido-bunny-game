import React, { useState } from 'react';
import './ScavengerHunt.scss'
import BunnyVenger from '../../../assets/pups/bunny-venger.png';
import GoBack from '../GoBack/GoBack';
import {questions} from './ScavengerHuntData';
import TreasureBox from '../../../assets/mainImages/treasure-box.png';
import Confetti from '../Confetti/Confetti';

export default function ScavengerHunt() {
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
            <GoBack/>
            <div className="hunt__bg">
                <div className='hunt__card'>
                    {showScore ? (
                        <>
                            <div className='hunt__score-section'>
                                <p>You scored {score} out of {questions.length}</p>
                            </div>
                            <img src={BunnyVenger} alt="Sitting pup called Skye" className="hunt__pic--score" />
                            <button className="hunt__btn" onClick={refreshPage}>Start Again</button>
                            <Confetti/>
                        </>
                    ) : (
                        <>
                            {questions[currentQuestion].id === 1 ? <img src={BunnyVenger} alt="bunny called venger" className="hunt__pic" />: questions[currentQuestion].id === 2 ? <img src={BunnyVenger} alt="bunny called venger" className="hunt__pic" />: questions[currentQuestion].id === 3 ? <img src={BunnyVenger} alt="bunny called venger" className="hunt__pic" />: questions[currentQuestion].id === 4 ? <img src={BunnyVenger} alt="bunny called venger" className="hunt__pic" />: questions[currentQuestion].id === 5 ? <img src={BunnyVenger} alt="bunny called venger" className="hunt__pic" />: questions[currentQuestion].id === 6 ? <img src={BunnyVenger} alt="bunny called venger" className="hunt__pic" />: questions[currentQuestion].id === 7 ? <img src={BunnyVenger} alt="bunny called venger" className="hunt__pic" />: questions[currentQuestion].id === 8 ? <img src={BunnyVenger} alt="bunny called venger" className="hunt__pic" />: questions[currentQuestion].id === 9 ? <img src={BunnyVenger} alt="bunny called venger" className="hunt__pic" />: questions[currentQuestion].id === 10 ? <img src={BunnyVenger} alt="bunny called venger" className="hunt__pic" />:  null}
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
                        </>
                    )}
                </div>
            </div>
            <img className="hunt__box" src={TreasureBox} alt="treasure box" />
        </section>
	);
}