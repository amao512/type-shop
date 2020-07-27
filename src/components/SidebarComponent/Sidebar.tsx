import React from 'react'
import './sidebar.scss'
import catalogIcon from '../../assets/images/007-menu-1.svg'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {

    type CatalogType = {
        name: string
        path: string
    }

    const catalogs: Array<CatalogType> = [
        { name: 'Школьные товары', path: 'school-supplies' },
        { name: 'Летние товары', path: 'summer-supplies' },
        { name: 'Продукты питания', path: 'food' },
        { name: 'Красота и здоровье', path: 'beaty-health' },
        { name: 'Сад и огород', path: 'garden' },
        { name: 'Книги', path: 'books' },
        { name: 'Ваш дом', path: 'u-house' },
        { name: 'Книги', path: 'books' },
        { name: 'Электроника', path: 'electronics' },
    ]

    return (
        <div className={'sidebar'}>
            <ul>
                <div className={'catalog'}>
                    <p>Каталог</p>
                    <img src={catalogIcon} alt='' />
                </div>

                { catalogs.map((catalog, index) => (
                    <NavLink to={catalog.path} key={index}>
                        <li>
                            <p>{catalog.name}</p>
                        </li>
                    </NavLink>
                )) }
            </ul>
        </div>
    )
}