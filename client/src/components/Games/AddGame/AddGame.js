import React, { useState, useRef, useEffect, useCallback  } from 'react';
import './AddGame.scss'
import BunnyBerry from '../../../assets/pups/bunny-berry.png';
import BunnyWing from '../../../assets/pups/bunny-berry-moving-wing.png';
import BunnyWingFlyRight from '../../../assets/pups/bunny-berry-fly-right.png';
import BunnyFlyRight from '../../../assets/pups/bunny-berry-moving-wing-fly-right.png';
import BunnyWingFlyLeft from '../../../assets/pups/bunny-berry-fly-left.png';
import BunnyFlyLeft from '../../../assets/pups/bunny-berry-moving-wing-fly-left.png';
import BunnyBerryHappy from '../../../assets/pups/bunny-berry.png';
import {questions} from './AddGameData';
import {useSpring, animated} from 'react-spring';
import GoBack from '../GoBack/GoBack';
import Confetti from '../Confetti/confetti';

export default function AddGame() {
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
            setScore(score + 1)
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
        <section className='add'>
            <GoBack/>
            <div className='add__card'>
                {showScore ? (
                    <>
                        <div className='add__score-section'>
                            <p>You scored {score} out of {questions.length}</p>
                        </div>
                        <img src={BunnyBerryHappy} alt="Bunny called BunnyBerry" className="add__pic--score" />
                        <button className="add__btn" onClick={refreshPage}>Start Again</button>
                        <Confetti/>
                        {showAnswerWindow? 
                            <div className="add__form-container" ref={AnswerRef} onClick={closeAnswer}>
                                <animated.div style={animation}>
                                    <button className="add__cancel" onClick={()=> setShowAnswerWindow(prev=>!prev)}>✕</button>
                                    <p  className='add__question-section add__question-section--disappear'>{questions[9].correctStatementTen}<br/><span className="add__question-section add__question-section--answer">{questions[9].correctAnswerTen}</span></p>
                                </animated.div>
                            </div>: null
                        }
                    </>
                ) : (
                    <>
                        {questions[currentQuestion].id === 1 ? <><img src={BunnyBerry} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--one" /><img src={BunnyWing} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--ones" /></>: questions[currentQuestion].id === 2 ? <><img src={BunnyFlyRight} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--two" /><img src={BunnyWingFlyRight} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--twos" /></>: questions[currentQuestion].id === 3 ? <><img src={BunnyFlyLeft} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--three" /><img src={BunnyWingFlyLeft} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--threes" /></>: questions[currentQuestion].id === 4 ? <><img src={BunnyFlyRight} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--four" /><img src={BunnyWingFlyRight} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--fours" /></>: questions[currentQuestion].id === 5 ? <><img src={BunnyFlyLeft} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--five" /><img src={BunnyWingFlyLeft} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--fives" /></>: questions[currentQuestion].id === 6 ? <><img src={BunnyFlyRight} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--six" /><img src={BunnyWingFlyRight} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--sixes" /></>: questions[currentQuestion].id === 7 ? <><img src={BunnyFlyLeft} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--seven" /><img src={BunnyWingFlyLeft} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--sevens" /></>: questions[currentQuestion].id === 8 ? <><img src={BunnyFlyRight} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--eight" /><img src={BunnyWingFlyRight} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--eights" /></>: questions[currentQuestion].id === 9 ? <><img src={BunnyFlyLeft} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--nine" /><img src={BunnyWingFlyLeft} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--nines" /></>: questions[currentQuestion].id === 10 ? <><img src={BunnyFlyRight} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--ten" /><img src={BunnyWingFlyRight} alt="Flying bunny called BunnyBerry" className="add__pic add__pic--tens" /></>: null}
                        <div className='add__question-section'>
                            <div className='add__question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='add__question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='add__answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <>
                                    <button className="add__btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                </>
                            ))}
                            {showAnswer ? 
                                <div className="add__window">
                                    {showAnswerWindow? 
                                    <div className="add__form-container" ref={AnswerRef} onClick = {closeAnswer}>
                                        <animated.div style={animation}>
                                            <button className="add__cancel" onClick={()=> setShowAnswerWindow(prev=>!prev)}>✕</button>
                                            <p  className='add__question-section add__question-section--disappear'>{questions[currentQuestion].correctStatement}<br/><span className="add__question-section add__question-section--answer">{questions[currentQuestion].correctAnswer}</span></p>
                                        </animated.div>
                                    </div>: null}
                                </div>:null
                            }
                        </div>
                    </>
                )}
            </div>
        </section>
	);
}