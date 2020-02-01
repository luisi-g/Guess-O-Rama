import React from 'react';
import {Link} from 'react-router-dom'

import './_start.scss';

const Start = () => {
    return (
        <div className="start">
            <div className="start__text">
                <h1>Guess-O-Rama</h1>
                <div className="start__number">
                    <p className="start__number--1">!</p>
                    <p className="start__number--2">@</p>
                    <p className="start__number--1">#</p>
                    <p className="start__number--2">%</p>
                    <p className="start__number--1">&</p>
                </div>
                <Link to="/mode">Start</Link>
            </div>
   
        </div>
    )
}

export default Start;