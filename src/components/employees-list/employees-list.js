import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryChange}) => {

    const elements = data.map(item => {
        const {id, salary, ...itemProps} = item;
        return (
            <EmployeesListItem 
                salary={item.salary}
                key = {id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryChange={onSalaryChange}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;