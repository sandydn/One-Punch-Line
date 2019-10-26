import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from '../charter/Button'
import Text from '../componants/Text'
import Start from '../data/Start.json'

const HomePage = () => {

    const startGame = (value) => <NavLink to="/fight" >{value}</NavLink>


    return (
        <div>
            <h1>One Punch Line</h1>
            <Button handleClick={startGame} value={'New Game'}/>
            <Text data={Start}/>
        </div>
    )
} 

export default HomePage