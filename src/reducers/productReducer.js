import {GET_PRODUCTS, GET_PRODUCT_DETAIL} from '../actions/types';

export default function productReducer(state = [], action){
    switch (action.type) {
        case GET_PRODUCTS:
            return action.products;
        case GET_PRODUCT_DETAIL:
            return[
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}