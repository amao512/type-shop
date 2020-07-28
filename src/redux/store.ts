import { combineReducers, createStore } from 'redux'
import productsReducer from './reducers/products'
import catalogsReducer from './reducers/catalogs'

const reducers = combineReducers({
    products: productsReducer,
    catalogs: catalogsReducer
})

export type RootState = ReturnType<typeof reducers>

export const store = createStore(reducers)