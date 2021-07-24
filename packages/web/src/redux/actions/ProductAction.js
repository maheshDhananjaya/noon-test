import { ActionType } from "../constants/ActionType"

export const setProducts = (products) => {
    return {
        type:ActionType.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct = (product) => {
    return {
        type:ActionType.SELECTED_PRODUCT,
        payload:product
    }
}

export const RemoveSelectedProduct = () => {
    return {
        type:ActionType.REMOVE_SELECTED_PRODUCT,
    }
}