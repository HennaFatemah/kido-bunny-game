import './ClickMe.scss';
import React from 'react';

const ClickMe = () => {
    return (
        <ul class="click">
            <li class="click__layer click__layer--white">CLICK ME</li>
            <li class="click__layer click__layer--violet">CLICK ME</li>
            <li class="click__layer click__layer--blue">CLICK ME</li>
            <li class="click__layer click__layer--green">CLICK ME</li>
            <li class="click__layer click__layer--yellow">CLICK ME</li>
            <li class="click__layer click__layer--orange">CLICK ME</li>
            <li class="click__layer click__layer--red">CLICK ME</li>
        </ul>
    );
};

export default ClickMe;