import React from 'react';
import {Link} from 'react-router-dom';
import './Creator.scss'

const Creator = () => {
    return (
        <Link to="/about" className="creator">About The Creator</Link>
    );
};

export default Creator;