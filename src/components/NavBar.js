import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <div>
            <NavLink
            exact
            to="/">
                To-Do
            </NavLink>
            <NavLink
            exact
            to="/calendar">
                Calendar
            </NavLink>
        </div>
    )
}

export default NavBar;