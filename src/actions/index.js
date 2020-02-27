import { GET_PRODUCTS, GET_PRODUCT_DETAIL } from './types';
import axios from 'axios';

const apiUrl = 'https://dev-wma-051.safanci.com/public/api/admin/modifier/r1';
const idAccount = '1';
const token = 'AV9lHRev255XYmqs6ZjY8T4xSWs0oxInT63rDykFJK1ARmjH0iLhhCt57zox';

export const getProductsAction = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    }
}

export const getProducts = () => {
    return (dispatch) => {
        return axios.get(apiUrl, {
             params: {
                 idAccount: idAccount,
                 token: token
             }
            })
            .then(response => {
                dispatch(getProductsAction(response.data.response.arrModifGrpResult))
                // console.log(response);
            })
            .catch(error => {
                throw(error)
            });
    }
}

