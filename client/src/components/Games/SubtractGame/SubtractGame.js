import React, { useState,useRef, useEffect, useCallback } from 'react';
import './SubtractGame.scss'
import BunnyRight from '../../../assets/pups/bunny-flippy-right.png';
import BunnyLeft from '../../../assets/pups/bunny-flippy-left.png';
import FlippyStraight from '../../../assets/pups/bunny-flippy.png';
import {useSpring, animated} from 'react-spring';
import {questions} from './SubtractGameData';
import GoBack from '../GoBack/GoBack'

export default function SubtractGame() {
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
        <section className='subtract'>
            <GoBack/>
            <div className='subtract__card'>
                {showScore ? (
                    <>
                        <div className='subtract__score-section'>
                            <p>You scored {score} out of {questions.length}</p>
                        </div>
                        <img src={FlippyStraight} alt="Sitting pup called Skye" className="subtract__pic--score" />
                        <button 
                            className="subtract__btn" 
                            onClick={refreshPage}
                        >Start Again</button>
                        {showAnswerWindow? 
                                <div className="subtract__form-container" ref={AnswerRef} onClick = {closeAnswer}>
                                    <animated.div style={animation}>
                                        <button className="subtract__cancel" onClick={()=> setShowAnswerWindow(prev=>!prev)}>✕</button>
                                        <p  className='subtract__question-section subtract__question-section--disappear'>{questions[9].correctStatementTen}<br/><span className="subtract__question-section subtract__question-section--answer">{questions[9].correctAnswerTen}</span></p>
                                    </animated.div>
                                </div>: null}
                    </>
                ) : (
                    <>
                        {questions[currentQuestion].id === 1 ? <><img src={BunnyRight} alt="Bunny flying to the right" className="subtract__pic subtract__pic--one" /></>: questions[currentQuestion].id === 2 ? <><img src={BunnyRight} alt="Bunny flying to the right" className="subtract__pic subtract__pic--two" /></>: questions[currentQuestion].id === 3 ? <><img src={BunnyLeft} alt="Bunny flying to the left" className="subtract__pic subtract__pic--three" /></>: questions[currentQuestion].id === 4 ? <><img src={BunnyRight} alt="Bunny flying to the right" className="subtract__pic subtract__pic--four" /></>: questions[currentQuestion].id === 5 ? <><img src={BunnyLeft} alt="Bunny flying to the left" className="subtract__pic subtract__pic--five" /></>: questions[currentQuestion].id === 6 ? <><img src={BunnyRight} alt="Bunny flying to the right" className="subtract__pic subtract__pic--six" /></>: questions[currentQuestion].id === 7 ? <><img src={BunnyLeft} alt="Bunny flying to the left" className="subtract__pic subtract__pic--seven" /></>: questions[currentQuestion].id === 8 ? <><img src={BunnyRight} alt="Bunny flying to the right" className="subtract__pic subtract__pic--eight" /></>: questions[currentQuestion].id === 9 ? <><img src={BunnyLeft} alt="Bunny flying to the left" className="subtract__pic subtract__pic--nine" /></>: questions[currentQuestion].id === 10 ? <><img src={FlippyStraight} alt="Bunny Flippy Upright" className="subtract__pic subtract__pic--ten" /></>: null}
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
                            {showAnswer ? <div className="subtract__window"  >
                                {showAnswerWindow? 
                                <div className="subtract__form-container" ref={AnswerRef} onClick = {closeAnswer}>
                                    <animated.div style={animation}>
                                        <button className="subtract__cancel" onClick={()=> setShowAnswerWindow(prev=>!prev)}>✕</button>
                                        <p  className='subtract__question-section subtract__question-section--disappear'>{questions[currentQuestion].correctStatement}<br/><span className="subtract__question-section subtract__question-section--answer">{questions[currentQuestion].correctAnswer}</span></p>
                                    </animated.div>
                                </div>: null}
                            </div>:null}
                        </div>
                    </>
                )}
            </div>
        </section>
	);
}