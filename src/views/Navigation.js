import './Navigation.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName="active" to="/" exact>Home</NavLink>
            <NavLink activeClassName="active" to="/countdown">Countdown</NavLink>
            <NavLink activeClassName="active" to="/todo">Todo</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
        </div>
    )
}
export default Navigation;