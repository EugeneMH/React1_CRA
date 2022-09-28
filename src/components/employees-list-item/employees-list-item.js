import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, premiums, promotion} = props;

    let listClassNames = 'list-group-item d-flex justify-content-between';

    if (premiums) listClassNames += ' increase';
    if (promotion) listClassNames += ' like';

    return (
        <li className={listClassNames}>
            <span onClick={onToggleProp} className='list-group-item-label' data-toggle="promotion">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
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

export default EmployeesListItem;