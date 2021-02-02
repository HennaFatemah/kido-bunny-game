import React, { useState } from 'react';
import './AddGame.scss'
import Skye from '../../../assets/pups/Color-bunny-1 copy.png';
import BunnyWing from '../../../assets/pups/Color-bunny-wing-moving-1 2.png';
import SkyeSit from '../../../assets/pups/skye.png';
import SkyeHappy from '../../../assets/pups/happy-skye.png';
import {questions} from './AddGameData';

export default function AddGame() {

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
                        {questions[currentQuestion].id === 1 ? <><img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--one" /><img src={BunnyWing} alt="Flying pup called Skye" className="add__pic add__pic--ones" /></>: questions[currentQuestion].id === 2 ? <><img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--two" /><img src={BunnyWing} alt="Flying pup called Skye" className="add__pic add__pic--twos" /></>: questions[currentQuestion].id === 3 ? <><img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--three" /><img src={BunnyWing} alt="Flying pup called Skye" className="add__pic add__pic--threes" /></>: questions[currentQuestion].id === 4 ? <><img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--four" /><img src={BunnyWing} alt="Flying pup called Skye" className="add__pic add__pic--fours" /></>: questions[currentQuestion].id === 5 ? <><img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--five" /><img src={BunnyWing} alt="Flying pup called Skye" className="add__pic add__pic--fives" /></>: questions[currentQuestion].id === 6 ? <><img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--six" /><img src={BunnyWing} alt="Flying pup called Skye" className="add__pic add__pic--sixes" /></>: questions[currentQuestion].id === 7 ? <><img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--seven" /><img src={BunnyWing} alt="Flying pup called Skye" className="add__pic add__pic--sevens" /></>: questions[currentQuestion].id === 8 ? <><img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--eight" /><img src={BunnyWing} alt="Flying pup called Skye" className="add__pic add__pic--eights" /></>: questions[currentQuestion].id === 9 ? <><img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--nine" /><img src={BunnyWing} alt="Flying pup called Skye" className="add__pic add__pic--nines" /></>: questions[currentQuestion].id === 10 ? <><img src={Skye} alt="Flying pup called Skye" className="add__pic add__pic--ten" /><img src={BunnyWing} alt="Flying pup called Skye" className="add__pic add__pic--tens" /></>: null}
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