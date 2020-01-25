import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Menu() {
    const className = 'menu__item';
    const activeClassName = 'menu__item-active';
    return (
        <nav className="menu">
            <NavLink
                to="/"
                className={className}
                activeClassName={activeClassName}
                exact >
                Главная
            </NavLink>
            <NavLink
                to="/drift"
                className={className}
                activeClassName={activeClassName}>
                Дрифт-такси
            </NavLink>
            <NavLink
                to="/timeattack"
                className={className}
                activeClassName={activeClassName}>
                Time Attack
            </NavLink>
            <NavLink
                to="/forza"
                className={className}
                activeClassName={activeClassName}>
                Forza Karting
            </NavLink>
        </nav>
    );
}