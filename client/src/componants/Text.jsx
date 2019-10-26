import React, {Component} from 'react'
// import Start from '../data/Start.json'

class Text extends Component {
    state={data: this.props.data,
            page: this.props.data[0],
            isload: false
        }

    setPage = async(id) => {
        const poulet = await this.props.data.filter((one)=> one.id.includes(id))
        console.log(poulet)
        await this.setState({page: poulet})
    }

    renderButton = () =>{
        const map = !!this.state.nextId ? console.log('REDIRECT') : this.state.page.questions.map((one) => <button onClick={() => this.setPage(one.nextId)}>{one.value}</button>)
        return map
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <h3>{this.state.page.text}</h3>
                {this.renderButton()}
            </div>
        )

    }   
}

export default Text