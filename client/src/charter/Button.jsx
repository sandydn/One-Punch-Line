import React from 'react'


function Button({handleClick}) {
    return (
        <div>
            <button onClick={handleClick}></button>
        </div>
    )
}

export default Button