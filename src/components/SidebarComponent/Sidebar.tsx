import React, { FC } from 'react'
import './sidebar.scss'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { CatalogType } from '../../redux/reducers/catalogs'

type MapStatePropsType = {
    catalogs: Array<CatalogType>
}

type PropsType = MapStatePropsType

const Sidebar: FC<PropsType> = ({ catalogs }) => {
    return (
        <div className={'sidebar'}>
            <ul>
                <div className={'catalog'}>
                    <p>Каталог</p>
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

const mstp = (state: RootState): MapStatePropsType => ({
    catalogs: state.catalogs.all
})

export default connect<MapStatePropsType, {}, {}, RootState>(mstp)(Sidebar)