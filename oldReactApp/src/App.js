import axios from 'axios'
import React from 'react'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            anecdotes: [],
            current: 0
        }
    }

    handleNext = () => {
        this.setState({current: this.state.current+1})
    }

    componentDidMount = () => {
        axios.get(BACKEND_URL).then(res => this.setState({anecdotes: res.data}))
    }

    render(){
        
        return (
            <div>
                <h1>Anecdote of the day</h1>
                <div>
                    {this.state.anecdotes[this.state.current]?.content}
                    <button onClick={this.handleNext}>Next</button>
                </div>
            </div>
        )
    }

}

export default App