import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header-logo'}>
                <NavLink to='/'>
                    <h1>TypeShop</h1>
                </NavLink>
            </div>

            <div className={'menu'}>
                <NavLink to='/'>
                    <span className="material-icons">favorite_border</span>
                </NavLink>

                <NavLink to='/'>
                    <span className="material-icons">shopping_bag</span>
                </NavLink>

                <NavLink to='/'>
                    <span className="material-icons">person_outline</span>
                </NavLink>
            </div>
        </div>
    )
}