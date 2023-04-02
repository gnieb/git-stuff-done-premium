import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <div className="text-sm lg:flex-grow">
            <NavLink
            className=" mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-white mr-4 "
            exact
            to="/">
                To-Do
            </NavLink>
            <NavLink
            className="mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-white mr-4 "
            exact
            to="/calendar">
                Calendar
            </NavLink>
        </div>
    )
}

export default NavBar;