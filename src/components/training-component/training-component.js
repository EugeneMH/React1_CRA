import React, { Component } from 'react';
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
            <>
                <form className="a1">
                    <span>Input here</span>
                    <input className="b1" type="text" onChange={this.showText}></input>
                    <span className="result">{this.state.input}</span>
                </form>
                {
                    React.Children.map(this.props.children, child => {
                        return React.cloneElement(child, {style:{'border':'1px solid black', 'display':'block', 'margin':'0 auto', 'width':'200px', 'textAlign':'center'}})
                    })
                }
            </>
        )
    } 
}

export default TrainingComponent;