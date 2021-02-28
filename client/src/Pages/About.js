import React, { useState } from 'react';
import './About.scss';
import { useHistory } from "react-router-dom";
import Back from '../assets/icons/back-arrow-white.svg';
import LinkedIn from '../assets/icons/linkedIn-white.png';
import GitHub from '../assets/icons/github-white.png';
import EMail from '../assets/icons/email.svg';
import ContactDetails from '../components/Contact/ContactDetails';
import Henna from '../assets/mainImages/avatar.png';

const About = () => {
    const [showContactWindow, setShowContactWindow] = useState(false)
    const openContactWindow = () => {
        setShowContactWindow(prev => !prev)
    }
    const history = useHistory();
    return (
        <section className='about'>
            <div className='about__card'>
                <div className="about__myself">
                    <img className="about__me" src={Henna} alt="creator avatar"/>
                    <div className="about__flex">
                        <p  className='about__main about__main--base'>Hi! I am <strong className="about__main--name">Henna Fatemah</strong>.<br/>You can find me on</p>
                        <div className="about__my-details">
                            <div className="about__links-container">
                                <a target="_blank" rel="noreferrer"  className='about__main about__links' href="https://www.linkedin.com/in/hennafatemah"><img src={LinkedIn} alt="linkedIn logo" className="about__logo" />Linkedin</a>
                                <a target="_blank" rel="noreferrer"  className='about__main about__links' href="https://github.com/HennaFatemah"><img src={GitHub} alt="Github logo" className="about__logo" />GitHub</a>
                                <button className="about__links about__main" onClick={openContactWindow}><img src={EMail} alt="email symbol" className="about__logo" />Contact</button>
                                <ContactDetails
                                    showContactWindow={showContactWindow}
                                    setShowContactWindow={setShowContactWindow}
                                />
                            </div>
                        </div>
                    </div>
                    <p  className='about__main about__main--text'>I am a passionate web developer as well as a dedicated mother of a four year old girl. A child at this age needs attention, training and guidance. Keeping to the best of motherhood while growing professionally is a constant struggle, yet the drive to achieve both fuels my determination. This drive made me come up with an idea of developing a bunch of games full of fun and learning. The characters that I created are inspired by the existing characters that are the attraction to the children at this age. Such characters will keep the teeny tiny engaged on the platform of learning and fun.<br/><br/> The game developed brings a smile and a sparkle of excitement on my daughter's face upon getting correct answers. Thus, it is assured that this game will help other parents and bring contentment and happiness to both parents and children.</p>
                </div>
                <button className="about__main about__links" onClick={() => history.push("/")}><img src={Back} alt="Sitting pup called Skye" className="about__back about__back--size" />Home</button>
            </div>
        </section>
    );
};

export default About;