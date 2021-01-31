import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav class="main-nav">
            <ul>
                <li>
                    <NavLink to="/mountain">Mountain</NavLink>
                </li>

                <li>
                    <NavLink to="/beach">Beach</NavLink>
                </li>

                <li>
                    <NavLink to="/birds">Birds</NavLink>
                </li>

                <li>
                    <NavLink to="/food">Food</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
