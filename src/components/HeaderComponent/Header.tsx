import React from 'react'
import './header.scss'
import logo from '../../assets/images/shopping-cart.svg'
import { NavLink } from 'react-router-dom'

import cartIcon from '../../assets/images/009-shopping-cart.svg'
import userIcon from '../../assets/images/001-user.svg'

export const Header = () => {
    return (
        <div className={'header'}>
            <div className='container'>
                <div className={'section'}>
                    <div className={'header-logo'}>
                        <NavLink to='/'>
                            <img src={logo} alt='' />
                            <h1>TypeShop</h1>
                        </NavLink>
                    </div>

                    <div className={'menu'}>
                        <NavLink to='/'>
                            <img src={cartIcon} alt='' />
                        </NavLink>

                        <NavLink to='/'>
                            <img src={userIcon} alt='' />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}