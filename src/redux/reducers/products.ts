import { ProductsActionsType } from './../actions/products';
import { GET_PRODUCTS } from '../constants'
import product1 from '../../assets/images/airpods.png'
import product2 from '../../assets/images/marker.jpg'
import product3 from '../../assets/images/book.jpg'
import { CatalogEnum } from './catalogs';

export type ProductType = {
    id: any
    title: string
    price: number
    category: CatalogEnum
    img: string
}

const initialState = {
    all: [
        { id: 1, title: 'Чехол для Airpods', price: 80000, category: 'Электроника', img: product1 },
        { id: 2, title: 'Марка-краска (белый)', price: 600, category: 'Школьные товары', img: product2 },
        { id: 3, title: 'Карл Маркс - Капитал: критика политической экономики', price: 6600, category: 'Книги', img: product3 },
    ] as Array<ProductType>
}

type InitialStateType = typeof initialState

const productsReducer = (state = initialState, action: ProductsActionsType): InitialStateType => {
    switch(action.type){
        case 'GET_PRODUCTS':
            return state
        default:
            return state
    }
}

export default productsReducer