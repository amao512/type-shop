import React, { FC, useState, useEffect } from 'react'
import ProductList from '../components/ProductListComponent/ProductList'
import { connect } from 'react-redux'
import { RootState } from '../redux/store'
import { ProductType } from '../redux/reducers/products'

type MapStatePropsType = {
    allProducts: Array<ProductType>
}

type PropsType = MapStatePropsType

const Home: FC<PropsType> = ({ allProducts }) => {
    const [products, setProducts] = useState<Array<ProductType> | []>([])

    useEffect(() => {
        setProducts(allProducts)
    }, [allProducts])

    return <ProductList products={products} />
}

const mstp = (state: RootState): MapStatePropsType => ({
    allProducts: state.products.all
})

export default connect<MapStatePropsType, {}, {}, RootState>(mstp)(Home)