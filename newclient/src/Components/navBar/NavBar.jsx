import { useLocation, NavLink } from "react-router-dom"
import SearchBar from "./searchBar/SearchBar"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import SearchBar from "./searchBar/SearchBar"

function NavBar (props){
    const location = useLocation()
    
    if (location.pathname === "/home"){
    return(

            <div>
            <NavLink></NavLink>
            <NavLink></NavLink>
            </div>
    )
}
}

export default NavBar