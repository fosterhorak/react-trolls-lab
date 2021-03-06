import { Link, NavLink } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            {/*<NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/orders">Order History</NavLink>
            &nbsp; | &nbsp;
            <NavLink exact activeStyle={{backgroundColor: 'yellow'}}to="/orders/new">New Order</NavLink>    
            &nbsp; | &nbsp; */}
            <NavLink exact to="/">Troll Index</NavLink>    
            &nbsp; | &nbsp;
            <NavLink exact to="/new">Add a New Troll</NavLink>    
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    );
}