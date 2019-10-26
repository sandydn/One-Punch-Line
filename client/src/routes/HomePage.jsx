import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from '../charter/Button'

const HomePage = () => {

    const startGame = (value) => <NavLink to="/fight" >{value}</NavLink>


    return (
        <div>
            <h1>One Punch Line</h1>
            <Button handleClick={startGame} value={'New Game'}/>
        </div>
    )
} 

export default HomePage