import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: '',
            warning: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, salary} = this.state;

        let warning = 'warning';

        if (this.props.warning.length >= 3) {
            warning += ' border'
        }
        

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    onSubmit={(e) => this.props.onSubmit(e)}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What's his name?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in USD?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
                <p className={warning}>{this.props.warning}</p>
            </div>
        )
    }
}

export default EmployeesAddForm;