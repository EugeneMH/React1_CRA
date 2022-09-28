import { Component } from 'react';
import './training-component.css';

class TrainingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input : ''
        }
        this.showText = this.showText.bind(this);
    }

    showText(e) {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <form className="a1">
                <span>Input here</span>
                <input className="b1" type="text" onChange={this.showText}></input>
                <span className="result">{this.state.input}</span>
            </form>
        )
    } 
}

export default TrainingComponent;