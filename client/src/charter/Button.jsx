import React from 'react'
import {NavLink} from 'react-router-dom'


function Button({handleClick, isRedirect, path, value}) {
    return (
        <div>
            {isRedirect ? 
            <button> <NavLink to={path} >{value}</NavLink> </button> : 
            <button onClick={handleClick}  >{value}</button>}
        </div>
    )
}

export default Button