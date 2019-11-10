import React from 'react'
import Button from '../../charter/Button'
import './Fighter.css'

function Fighter({isEnemy}) {
    const pv = () =>  <div className='pv'>
        <div className='life'></div>
        <div className='mana'></div>
    </div>

    const enemy = () => <div className='enemy'>
        {pv()}
        <div className='profil'>
            <figure className='picture'></figure>
            <h1 className='name'><span>Evil Eric</span></h1>
        </div>
    </div>

    const fighter = () => <div className='fighter'>
        <div className='profil'>
            <figure className='picture'></figure>
            <h1 className='name'><span>Good Eric</span></h1>
        </div>
        <div className='fighterboard'>
            {pv()}
            <div className='attacks'>
                <Button />
                <Button />
                <Button />
                <Button />
            </div>
        </div>
    </div>

    return (
        isEnemy ? enemy() : fighter()
    )
}

export default Fighter