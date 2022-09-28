import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : '1'
        }
    }

    handleClick = (e) => {
        this.setState(({id}) => ({
            id : e.target.getAttribute('data-id')
        }))
        this.props.onUpdateFilter(e.target.getAttribute('data-id'));
    }

    isActive = (id) => {
        if (this.state.id === id) {
            return 'btn btn-light'
        } else {
            return 'btn btn-outline-light'
        }
    }

    render() {

        // let classNames = "btn";

        return (
            <div className="btn-group">
                <button 
                    className={this.isActive("1")}
                    data-id="1"
                    type="button"
                    onClick={this.handleClick}>
                    All employees
                </button>
                <button 
                    className={this.isActive("2")}
                    data-id="2"
                    type="button"
                    onClick={this.handleClick}>
                    Selected for premiums
                </button>
                <button 
                    className={this.isActive("3")}
                    data-id="3"
                    type="button"
                    onClick={this.handleClick}>
                    Salary over 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;