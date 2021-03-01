import React from 'react';
import BackArrow from '../../../assets/icons/back-arrow.svg';
import { useHistory } from "react-router-dom";
import './GoBack.scss';

const GoBack = () => {
    const history = useHistory();
    return (
        <div className="back-container">
            <button className="back-container__back" onClick={() => history.push("/choosegame")}><img src={BackArrow} alt="Back Arrow" className="back-container__back-pic" />Go Back</button>
            <button className="back-container__back" onClick={() => history.push("/")}><img src={BackArrow} alt="Back Arrow" className="back-container__back-pic" /><img src={BackArrow} alt="Back Arrow" className="back-container__back-pic" />Home</button>
        </div>
    );
};

export default GoBack;