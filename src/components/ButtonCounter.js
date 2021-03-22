import React, { Component } from 'react';

export default class ButtonCounter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    handelClick = () => {
        // let newCount = this.state.count + 1
        // this.setState({
        //     count: newCount
        // })

        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handelClick}>Click Me</button>
            </div>
        )
    }
}