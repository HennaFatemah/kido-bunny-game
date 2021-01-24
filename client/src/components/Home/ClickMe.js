import './ClickMe.scss';
import React from 'react';

const ClickMe = () => {
    return (
        <ul class="click__c-rainbow">
            <li class="click__c-rainbow__layer click__c-rainbow__layer--white">CLICK ME</li>
            <li class="click__c-rainbow__layer click__c-rainbow__layer--orange">CLICK ME</li>
            <li class="click__c-rainbow__layer click__c-rainbow__layer--red">CLICK ME</li>
            <li class="click__c-rainbow__layer click__c-rainbow__layer--violet">CLICK ME</li>
            <li class="click__c-rainbow__layer click__c-rainbow__layer--blue">CLICK ME</li>
            <li class="click__c-rainbow__layer click__c-rainbow__layer--green">CLICK ME</li>
            <li class="click__c-rainbow__layer click__c-rainbow__layer--yellow">CLICK ME</li>
        </ul>
    );
};

export default ClickMe;