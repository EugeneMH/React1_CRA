import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            salary: this.props.salary
        }
    }

    onSalaryChange = (e) => {
        this.setState(({salary}) => ({
            salary: e.target.value
        }))
        this.props.onSalaryChange(this.props.name, e.target.value)
        // console.log(this.state.salary);
    }

    render() {
        const {name, salary, onDelete, onToggleProp, premiums, promotion} = this.props;

        let listClassNames = 'list-group-item d-flex justify-content-between';
    
        if (premiums) listClassNames += ' increase';
        if (promotion) listClassNames += ' like';
    
        return (
            <li className={listClassNames}>
                <span onClick={onToggleProp} className='list-group-item-label' data-toggle="promotion">{name}</span>
                <input type="text" 
                className="list-group-item-input" 
                value={this.state.salary}
                onChange={this.onSalaryChange}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={onToggleProp}
                        className="btn-cookie btn-sm "
                        data-toggle="premiums">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;