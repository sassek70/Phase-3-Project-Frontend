import React from "react"
import { NavLink } from "react-router-dom"
import { Menu } from 'semantic-ui-react'

const Header =  () => {


    return (
        <Menu compact>
            <Menu.Item as={NavLink} to="/Users">Users</Menu.Item>
            <Menu.Item as={NavLink} to="/Ingredients">All Ingredients</Menu.Item>
            <Menu.Item as={NavLink} to="/Recipes">All Recipes</Menu.Item>
        </Menu>
    )
}

export default Header