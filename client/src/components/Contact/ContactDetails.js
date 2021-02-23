import React, {useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring';
import './ContactDetails.scss';
import ContactUs from './Contact';
const ContactDetails = ({showContactWindow, setShowContactWindow}) => {
    const contactRef = useRef()
    const animation = useSpring({
        config: {
            duration: 550
        },
        opacity: showContactWindow ? 1 : 0,
        transform: showContactWindow ? `translateY(0%)` : `translateY(-100%)`
    })
    const closeContact=(e)=>{
        if(contactRef.current === e.target) {
            setShowContactWindow(false)
        }
    }

    const keyPress = useCallback(e =>{
        if(e.key === 'Escape' && showContactWindow){
            setShowContactWindow(false)
        }
    },[setShowContactWindow, showContactWindow])
    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    },[keyPress])
    return (
        <>
        <div className="contact__window"  >
            {showContactWindow? 
            <div className="contact__form-container" ref={contactRef} onClick = {closeContact}>
                <animated.div style={animation}>
                <button className="contact__cancel" onClick={()=> setShowContactWindow(prev=>!prev)}>✖︎</button>
                    <ContactUs/>
                </animated.div>
            </div>: null}
        </div>
        </>
    );
};

export default ContactDetails;