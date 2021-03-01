import React, { useState } from 'react';
import './ExerciseGame.scss'
import BunnyToughy from '../../../assets/pups/bunny-toughy.png';
import {questions} from './ExerciseGameData';
import GoBack from '../GoBack/GoBack';
import Confetti from '../Confetti/Confetti';

export default function ExerciseGame() {
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
            <GoBack/>
            <div className='exercise__card'>
                {showScore ? (
                    <>
                    <div className='exercise__score-section'>
                        <p>You scored {score} out of {questions.length}</p>
                    </div>
                    <img src={BunnyToughy} alt="Sitting pup called Skye" className="exercise__pic--score" />
                    <button className="exercise__btn" onClick={refreshPage}>Start Again</button>
                    <Confetti/>
                    </>
                ) : (
                    <>
                        {questions[currentQuestion].id === 1 ? <img src={BunnyToughy} alt="pup called Marshal" className="exercise__pic exercise__pic--one" />: questions[currentQuestion].id === 2 ? <img src={BunnyToughy} alt="Flying pup called Skye" className="exercise__pic exercise__pic--two" />: questions[currentQuestion].id === 3 ? <img src={BunnyToughy} alt="Flying pup called Skye" className="exercise__pic exercise__pic--three" />: questions[currentQuestion].id === 4 ? <img src={BunnyToughy} alt="Flying pup called Skye" className="exercise__pic exercise__pic--four" />: questions[currentQuestion].id === 5 ? <img src={BunnyToughy} alt="Flying pup called Skye" className="exercise__pic exercise__pic--five" />:  null}
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