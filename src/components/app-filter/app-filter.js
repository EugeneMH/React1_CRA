import './app-filter.css';

const AppFilter = (props) => {

    const buttons = [
        {name: 'All employees', id: '1'},
        {name: 'Selected for premiums', id : '2'},
        {name: 'Salary over 1000$', id: '3'},
    ]

    const elems = buttons.map( ({name, id}) => {
        const active = props.tab === id //if props.tab === id, return true

        const clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button 
            className={`btn ${clazz}`}
            type="button"
            data-id={id}
            key={id}
            onClick={() => props.onUpdateFilter(id)}
            >
            {name}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {elems}
        </div>
    )
}

export default AppFilter;