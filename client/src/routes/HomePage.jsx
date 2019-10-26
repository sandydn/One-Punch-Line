import React from 'react'
import Button from '../charter/Button'
import TextScript from '../components/TextScript'

const HomePage = () => {

    return (
        <div>
            <h1>One Punch Line</h1>
            <Button value={'New Game'} path={"/first"} isRedirect/>
        </div>
    )
} 

export default HomePage