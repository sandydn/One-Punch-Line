import React, {Component} from 'react'
import Fighter from './Fighter'
import './Layout.css'

export default class Layout extends Component {
    render () {

        return (
            <div className='layout'>
                <Fighter isEnemy/>
                <div className='text'></div>
                <Fighter isEnemy={false}/>
            </div>
        )
    }
}
