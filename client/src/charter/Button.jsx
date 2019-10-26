import React from 'react'


function Button({handleClick, value}) {
    return (
        <div>
            <button >{handleClick(value)}</button>
        </div>
    )
}

export default Button