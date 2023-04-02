import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";


function Header() {


    return (

        <header className = "flex items-center justify-between flex-wrap bg-teal-900 p-6">
            <div className = "flex items-center flex-shrink-0 text-white mr-8">
            <span className="font-semibold text-xl tracking-tight mr-8">Git Stuff Done</span>
            <div 
                className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"> 
                <NavBar />
            </div>
            </div> 
            <NavLink
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-600 hover:bg-gray-400 mt-4 lg:mt-0"
            exact
            to="/about"
            >
            About
            </NavLink>
        </header>


    )
}

export default Header