import { ActionType } from "../constants/ActionType";

const initialState = {
    products: [],
}

export const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const SelectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return { ...state, ...payload};

            case ActionType.REMOVE_SELECTED_PRODUCT:
                return {};
        default:
            return state;
    }
}