import React, { FC, useState, useEffect } from 'react'
import ProductList from '../components/ProductListComponent/ProductList'
import { connect } from 'react-redux'
import { RootState } from '../redux/store'
import { ProductType } from '../redux/reducers/products'
import { withRouter } from 'react-router-dom'
import { CatalogType } from '../redux/reducers/catalogs'

type MapStatePropsType = {
    allProducts: Array<ProductType>
    allCatalogs: Array<CatalogType>
}

type OwnPropsType = {
    match: any
}

type PropsType = MapStatePropsType & OwnPropsType

const Category: FC<PropsType> = ({ allProducts, allCatalogs, match }) => {
    const [catalog, setCatalog] = useState<CatalogType | any>()
    const [products, setProducts] = useState<Array<ProductType>>([])

    useEffect(() => {
        setCatalog(allCatalogs.find(catalog => catalog.path === match.params.category))
    }, [match, allCatalogs])

    useEffect(() => {
        setProducts(allProducts.filter(product => product.category === (catalog && catalog.name)))
    }, [catalog, allProducts])

    return <ProductList products={products} />
}

const mstp = (state: RootState): MapStatePropsType => ({
    allProducts: state.products.all,
    allCatalogs: state.catalogs.all
})

const withRouterCategory = withRouter<any, any>(Category)

export default connect<MapStatePropsType, {}, OwnPropsType, RootState>(mstp)(withRouterCategory)
