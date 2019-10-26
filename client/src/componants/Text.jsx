import React, { Component } from "react"
// import Start from '../data/Start.json'

class Text extends Component {
  state = {
    data: this.props.data,
    page: this.props.data[0],
    isLoad: true
  }

  // setPage = async(id) => {
  //     const poulet = await this.props.data.filter((one)=> one.id.includes(id))
  //     console.log(poulet)
  //     await this.setState({page: poulet})
  // }

  // renderButton = () =>{
  //     const map = !!this.state.nextId ? console.log('REDIRECT') : this.state.page.questions.map((one) => <button onClick={() => this.setPage(one.nextId)}>{one.value}</button>)
  //     return map
  // }
  getNextId = id => {
    console.log(id)
    const nextChanged = this.state.data.find(elem => elem.id === id)
    console.log(nextChanged.questions.length)

    nextChanged.questions.length === 0
      ? console.log("is true") ||
        this.setState({ page: nextChanged, isLoad: false })
      : console.log("is false") ||
        this.setState({ page: nextChanged, isLoad: true })
  }
  render() {
    console.log(this.state)
    const { data, page, isLoad } = this.state
    return (
      <div>
        <h3>{page.text}</h3>
        {isLoad
          ? console.log("mamamama") ||
            page.questions.map(question => (
              <input
                type="submit"
                value={question.value}
                onClick={() => this.getNextId(question.nextId)}
              />
            ))
          : console.log("mimimimimim") || <div>ffff</div>}
      </div>
    )
  }
}

export default Text
