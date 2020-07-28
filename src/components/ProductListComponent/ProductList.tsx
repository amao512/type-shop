import React, { FC } from 'react'
import './productList.scss'
import { ProductType } from '../../redux/reducers/products'

type OwnPropsType = {
    products: Array<ProductType>
}

type PropsType = OwnPropsType

const ProductList: FC<PropsType> = ({ products }) => {
    return (
        <div className={'product-list'}>
            
            {products.map(product => (
                <div key={product.id} className={'product-item'}>
                    <div className={'product-img'}>
                        <img src={product.img} alt='' />

                        <div className={'product-hover'}>
                            <li>
                                <span className="material-icons">open_in_full</span>
                            </li>
                            <li>
                                <span className="material-icons">favorite_border</span>
                            </li>
                            <li>
                                <span className="material-icons">shopping_bag</span>
                            </li>
                        </div>
                    </div>

                    <div className={'product-info'}>
                        <p>{product.title}</p>
                        <span>{product.price} тг</span>
                    </div>
                </div>
            ))}

        </div>
    )
}


export default ProductList