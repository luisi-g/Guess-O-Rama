import React from 'react';

import './_mode.scss'

import { Link } from 'react-router-dom'

import { GiMagicGate } from 'react-icons/gi'
import { IconContext } from "react-icons";

const Mode = () => {
    return (
        <div className="mode">
            <IconContext.Provider value={{ className: "mode__icon" }}>
                <GiMagicGate />
            </IconContext.Provider>
            <h1>Choose A Mode</h1>
            <div className="mode__links">
                <Link to={{
                    pathname: '/normal',
                    state: {
                        mode: 1
                    }
                }} >Normal</Link>
                <Link to={{
                    pathname: '/hard',
                    state: {
                        mode: 0
                    }
                }}>Hard</Link>
            </div>
        </div>
    )
}

export default Mode;