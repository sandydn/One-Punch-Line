import React, { Component } from "react"
import Button from '../charter/Button'

export default class TextScript extends Component{
  state = {
    data: this.props.data,
    page: this.props.data[0],
    isLoad: true
  }

  getNextId = id => {
    const nextChanged = this.state.data.find(elem => elem.id === id)

    nextChanged.questions.length === 0
      ? this.setState({ page: nextChanged, isLoad: false })
      : this.setState({ page: nextChanged, isLoad: true })
  }

  render() {
    const { data, 
            page: { text, goFight, questions }, 
            isLoad } 
          = this.state

    return (
      <div>
        <h3>{text}</h3>
        {isLoad
          ? questions.map(question => (
            <Button color={'blue'} 
                    handleClick={() => this.getNextId(question.nextId)} 
                    value={question.value} 
                    isRedirect={false}/>
          ))
          : <Button color={'red'} value={'FIGHT !'} path={goFight} isRedirect/>}
      </div>
    )
  }
}

