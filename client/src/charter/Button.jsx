import React from 'react'
import {NavLink} from 'react-router-dom'

import './Buttons.css'

function Button({color, handleClick, isRedirect, path, value, size}) {
    const buttonClass = `button ${color}`

    return (
        <div>
            {isRedirect ? 
            <div className={buttonClass}> <NavLink to={path} >{value}</NavLink> </div> : 
            <div className={buttonClass} onClick={handleClick}><p>{value}</p></div>}
        </div>
    )
}

export default Button