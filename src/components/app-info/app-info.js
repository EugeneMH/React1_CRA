import './app-info.css';

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Count of employees in company N</h1>
            <h2>Total number of employees: {props.count}</h2>
            <h3>Premiums will receive: {props.countPremiums()} </h3>
        </div>
    )
}

export default AppInfo;