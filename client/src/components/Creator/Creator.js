import React from 'react';
import {Link} from 'react-router-dom';
import './Creator.scss'

const Creator = () => {
    return (
        <Link to="/about" className="creator"><p className="creator__text">About The Creator</p></Link>
    );
};

export default Creator;