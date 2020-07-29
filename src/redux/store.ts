import { combineReducers, createStore } from 'redux'
import productsReducer from './reducers/products'
import catalogsReducer from './reducers/catalogs'

const reducers = combineReducers({
    products: productsReducer,
    catalogs: catalogsReducer
})

export type RootState = ReturnType<typeof reducers>

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export const store = createStore(reducers)