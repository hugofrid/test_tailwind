import React from 'react'
import NavItem from './NavItem'

const Nav = () => {
    return (
        <nav className="flex">
              <NavItem>
                Home
            </NavItem>
            <NavItem active>
                Analysis
            </NavItem>
            <NavItem>
                My favourites
            </NavItem>
            <NavItem>
                News
            </NavItem>
        </nav>
    )
}

export default Nav
