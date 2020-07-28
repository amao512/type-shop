import { GET_PRODUCTS } from './../constants/index'

export type GetProductsType = {
    type: typeof GET_PRODUCTS
}

export const getProducts = (): GetProductsType => ({ type: GET_PRODUCTS })