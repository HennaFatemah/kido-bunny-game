import React, { useState } from 'react';
import './About.scss';
import { useHistory } from "react-router-dom";
import Back from '../assets/icons/back-arrow.svg';
import LinkedIn from '../assets/icons/linkedIn-white.png';
import GitHub from '../assets/icons/github-white.png';
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
                        <p  className='about__main'>You can find me on</p>
                        <p className="about__links"><img src={LinkedIn} alt="Sitting pup called Skye" className="about__logo" /><a target="_blank" rel="noreferrer"  className='about__main' href="https://www.linkedin.com/in/hennafatemah">Linkedin</a></p>
                        <p className="about__links"><img src={GitHub} alt="Sitting pup called Skye" className="about__logo" /><a target="_blank" rel="noreferrer"  className='about__main' href="https://github.com/HennaFatemah">GitHub</a></p>
                        <p  className='about__main'>Leave your reviews here please</p>
                        <p className="about__main about__links">
                        <button className="about__main" onClick={openContactWindow}>Contact</button>
                        <ContactDetails
                            showContactWindow={showContactWindow}
                            setShowContactWindow={setShowContactWindow}
                        />
                        </p>
                    </div>
                </div>
                <p  className='about__main'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                <button className="about__main about__links" onClick={() => history.push("/")}><img src={Back} alt="Sitting pup called Skye" className="about__back" />Home</button>
            </div>
        </section>
    );
};

export default About;