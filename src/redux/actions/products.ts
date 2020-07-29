import { InferActionsType } from './../store';

export type ProductsActionsType = InferActionsType<typeof productsActions>

export const productsActions = {
    getProducts: () => ({ type: 'GET_PRODUCTS' } as const)
}