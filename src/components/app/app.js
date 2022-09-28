import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

// import TrainingComponent from '../training-component/training-component';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {name: 'John Smith', salary: 800, premiums: false, promotion: false, id: 1},
                {name: 'Adam Silver', salary: 1000, premiums: false, promotion: false, id: 2},
                {name: 'Michael Corners', salary: 2000, premiums: false, promotion: false, id: 3}
            ],
            warning : '',
            term: '',
            tab: '1'
        }
        this.maxIndex = 4;
    }
    
    //deleting items from the list

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data : data.filter(item => item.id !== id)
        }))
    }

    //adding new items to the list

    addItem = (e) => {
        e.preventDefault();
        
        if (e.target.name.value.length < 3 || e.target.salary.value === '') {
            this.setState(() => ({
                warning : 'Please, enter a valid value'
            }))
            return;
        } else {
            this.setState(() => ({
                warning : ''
            }))
        }
        const newItem = {
            name: e.target.name.value,
            salary: e.target.salary.value,
            premiums: false,
            promotion: false,
            id: this.maxIndex
        }
        // console.log(newItem.id);
        this.maxIndex++;
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data : newArr
            }
        })
    }
    //one way to toggle classNames in React

    // onTogglePremiums = (id) => {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(item => item.id === id);

    //         const old = data[index];
    //         const newItem = {...old, premiums: !old.premiums};

    //         const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

    //         return {
    //             data : newArray
    //         }


    //     })
    // }

    // universal method for enabling/disabling styles, goes down the Virtual DOM to list-item

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data : data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    //general information at the top of the page

    countPremiums = () => {
        const selected = this.state.data.filter(item => item.premiums === true)

        return selected.length;
    }

    //search and filter

    searchEmployee = (items, term) => {

        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    filterEmployee = (items, tab) => {
        switch (tab) {
            case '2' : 
                return items.filter(item => item.premiums)
            case '3' :
                return items.filter(item => item.salary > 1000)
            default: 
                return items
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onUpdateFilter = (tab) => {
        this.setState({tab});
    }

    onSalaryChange = (name, salary) => {
        // console.log(this.state.data)
        this.setState(({data}) => ({
            data : data.map(item => {
                if (item.name === name) {
                    return {...item, salary : salary}
                }
                return item;
            })
        }))
        
    }

    render() {
        const {data, warning, term, tab} = this.state;
        const visibleData = this.filterEmployee(this.searchEmployee(data, term), tab);

        return (
            <div className='app'>
                <AppInfo 
                count={data.length}
                countPremiums={this.countPremiums}/>
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                    onUpdateFilter={this.onUpdateFilter}
                    tab={this.state.tab}/>
                </div>
    
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
                onSalaryChange={this.onSalaryChange}/>
                <EmployeesAddForm
                onSubmit={e => this.addItem(e)}
                warning={warning}/>
                {/* <TrainingComponent/> */}
            </div>
        )
    }
}

export default App;