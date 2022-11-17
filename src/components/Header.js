import React from "react"
import { NavLink } from "react-router-dom"

const Header =  () => {


    return (
        <nav>
            <NavLink name="Users" to="/Users">Users</NavLink>
            <NavLink name="All Ingredients" to="/Ingredients">All Ingredients</NavLink>
            <NavLink name="All Recipes" to="/Recipes">All Recipes</NavLink>
        </nav>
    )
}

export default Header