import React, { useState, useRef, useEffect, useCallback } from 'react';
import './SoundGame.scss'
import BunnyMuse from '../../../assets/pups/bunny-muse.png';
import BackArrow from '../../../assets/icons/back-arrow.svg';
import {questions} from './SoundGameData';
import { useHistory } from "react-router-dom";
import SoundOne from './Audio/SoundOne';
import SoundTwo from './Audio/SoundTwo';
import SoundThree from './Audio/SoundThree';
import SoundFour from './Audio/SoundFour';
import SoundFive from './Audio/SoundFive';
import SoundSix from './Audio/SoundSix';
import SoundSeven from './Audio/SoundSeven';
import SoundEight from './Audio/SoundEight';
import SoundNine from './Audio/SoundNine';
import SoundTen from './Audio/SoundTen';
import Confetti from '../Confetti/Confetti';
import {useSpring, animated} from 'react-spring';
import GoBack from '../GoBack/GoBack';

export default function ScavengerHunt() {
    const history = useHistory();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [showAnswerWindow, setShowAnswerWindow] = useState(false)
    const openAnswerWindow = () => {
        setShowAnswerWindow(prev => !prev)
    }


	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
        openAnswerWindow()
        setShowAnswer('answer')
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
    const AnswerRef = useRef()
    const animation = useSpring({
        config: {
            duration: 550
        },
        opacity: showAnswerWindow ? 1 : 0,
        transform: showAnswerWindow ? `translateY(0%)` : `translateY(-100%)`
    })
    const closeAnswer=(e)=>{
        if(AnswerRef.current === e.target) {
            setShowAnswerWindow(false)
        }
    }
    const keyPress = useCallback(e =>{
        if(e.key === 'Escape' && showAnswerWindow){
            setShowAnswerWindow(false)
        }
    },[setShowAnswerWindow, showAnswerWindow])
    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    },[keyPress])

	return (
        <section className='sound'>
            <div className="sound__bg">
                <GoBack/>
                <div className='sound__card'>
                    {showScore ? (
                        <>
                            <div className='sound__score-section'>
                                <p>You scored {score} out of {questions.length}</p>
                            </div>
                            <button className="sound__btn" onClick={refreshPage}>Start Again</button>
                            <Confetti/>
                            {showAnswerWindow? 
                            <div className="sound__form-container" ref={AnswerRef} onClick={closeAnswer}>
                                <animated.div style={animation}>
                                    <button className="sound__cancel" onClick={()=> setShowAnswerWindow(prev=>!prev)}>✕</button>
                                    <p  className='sound__question-section sound__question-section--disappear'>{questions[4].correctStatementFive}<br/><span className="sound__question-section sound__question-section--answer">{questions[4].correctAnswerFive}</span></p>
                                </animated.div>
                            </div>: null
                        }

                        </>
                    ) : (
                        <>
                            {questions[currentQuestion].id === 1 ? <div className="sound__btn-container"><SoundOne/></div>: questions[currentQuestion].id === 2 ? <div className="sound__btn-container"><SoundTwo/></div>: questions[currentQuestion].id === 3 ? <div className="sound__btn-container"><SoundThree/></div>: questions[currentQuestion].id === 4 ? <div className="sound__btn-container"><SoundFour/></div>: questions[currentQuestion].id === 5 ? <div className="sound__btn-container"><SoundFive/></div>: questions[currentQuestion].id === 6 ? <div className="sound__btn-container"><SoundSix/></div>: questions[currentQuestion].id === 7 ? <div className="sound__btn-container"><SoundSeven/></div>: questions[currentQuestion].id === 8 ? <div className="sound__btn-container"><SoundEight/></div>: questions[currentQuestion].id === 9 ? <div className="sound__btn-container"><SoundNine/></div>: questions[currentQuestion].id === 10 ? <div className="sound__btn-container"><SoundTen/></div>:  null}
                            <div className='sound__question-section'>
                                <div className='sound__question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='sound__question-text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='sound__answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button className="sound__btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                                {showAnswer ? 
                                <div className="sound__window">
                                    {showAnswerWindow? 
                                    <div className="sound__form-container" ref={AnswerRef} onClick = {closeAnswer}>
                                        <animated.div style={animation}>
                                            <button className="sound__cancel" onClick={()=> setShowAnswerWindow(prev=>!prev)}>✕</button>
                                            <p  className='sound__question-section sound__question-section--disappear'>{questions[currentQuestion].correctStatement}<br/><span className="sound__question-section sound__question-section--answer">{questions[currentQuestion].correctAnswer}</span></p>
                                        </animated.div>
                                    </div>: null}
                                </div>:null
                            }
                            </div>
                        </>
                    )}
                </div>
                <img src={BunnyMuse} alt="bunny called muse" className="sound__pic" />
            </div>
        </section>
	);
}