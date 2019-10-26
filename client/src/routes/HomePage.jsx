import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from '../charter/Button'
import TextScript from '../componants/Text'
import Start from '../data/Start.json'

const HomePage = () => {

    return (
        <div>
            <h1>One Punch Line</h1>
            {/* <Button value={'New Game'} path={"/fight"} isRedirect/> */}
            <TextScript data={Start}/>
        </div>
    )
} 

export default HomePage