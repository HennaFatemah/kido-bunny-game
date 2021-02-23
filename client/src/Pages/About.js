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
                <h1 className="about__title">About The Creator</h1>
                <div className="about__myself">
                    <img className="about__me" src={Henna}/>
                    <div className="about__my-details">
                        <p  className='about__main about__main--base'>You can find me on</p>
                        <div className="about__links-container">
                            <a target="_blank" rel="noreferrer"  className='about__main about__links' href="https://www.linkedin.com/in/hennafatemah"><img src={LinkedIn} alt="Sitting pup called Skye" className="about__logo" />Linkedin</a>
                            <a target="_blank" rel="noreferrer"  className='about__main about__links' href="https://github.com/HennaFatemah"><img src={GitHub} alt="Sitting pup called Skye" className="about__logo" />GitHub</a>
                            <button className="about__links about__main" onClick={openContactWindow}><img src={EMail} alt="Sitting pup called Skye" className="about__logo" />Contact</button>
                            <ContactDetails
                                showContactWindow={showContactWindow}
                                setShowContactWindow={setShowContactWindow}
                            />
                        </div>
                    </div>
                    <p  className='about__main about__main--text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                </div>
                <button className="about__main about__links" onClick={() => history.push("/")}><img src={Back} alt="Sitting pup called Skye" className="about__back about__back--size" />Home</button>
            </div>
        </section>
    );
};

export default About;