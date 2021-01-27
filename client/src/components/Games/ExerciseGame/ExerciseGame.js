import React, { useState } from 'react';
import './ExerciseGame.scss'
import Skye from '../../../assets/pups/new-skye-flying.png';
import SkyeSit from '../../../assets/pups/skye.png';
import SkyeHappy from '../../../assets/pups/happy-skye.png';
import {questions} from './ExerciseGameData';

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
        <section className='add'>
            <div className='add__card'>
                {showScore ? (
                    <>
                    <div className='add__score-section'>
                        <p>You scored {score} out of {questions.length}</p>
                    </div>
                    <img src={SkyeHappy} alt="Sitting pup called Skye" className="add__pic--score" />
                    <button className="add__btn" onClick={refreshPage}>Start Again</button>
                    </>
                ) : (
                    <>
                        {questions[currentQuestion].id === 1 ? <img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--one" />: questions[currentQuestion].id === 2 ? <img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--two" />: questions[currentQuestion].id === 3 ? <img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--three" />: questions[currentQuestion].id === 4 ? <img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--four" />: questions[currentQuestion].id === 5 ? <img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--five" />: questions[currentQuestion].id === 6 ? <img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--six" />: questions[currentQuestion].id === 7 ? <img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--seven" />: questions[currentQuestion].id === 8 ? <img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--eight" />: questions[currentQuestion].id === 9 ? <img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--nine" />: questions[currentQuestion].id === 10 ? <img src={SkyeSit} alt="Sitting pup called Skye" className="add__pic add__pic--ten" />: null}
                        <div className='add__question-section'>
                            <div className='add__question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='add__question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='add__answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className="add__btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
            </section>
	);
}