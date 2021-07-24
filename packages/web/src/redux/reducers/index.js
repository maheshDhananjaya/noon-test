import { combineReducers } from 'redux';
import { ProductReducer, SelectedProductReducer } from './ProductReducer';

export const reducers = combineReducers({
    allProducts: ProductReducer,
    product: SelectedProductReducer
});