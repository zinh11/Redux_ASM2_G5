import axios from 'axios';
import callApi from '../api'
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';

export const actFetchProductsRequest = () => {
    return async (dispatch) => {
        try {
            // const res = await callApi('products', 'GET', null);
            // dispatch(GetAllProduct(res.data));
            // console.log(res.data);
            const products = await axios.get('http://localhost:4000/products')
            console.log(products.data);
            dispatch(GetAllProduct(products.data));

        } catch (error) {
            // Xử lý lỗi nếu cần thiết
            console.error('Error fetching products:', error);
        }
    }
}

/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload) {
    return {
        type: 'GET_ALL_PRODUCT',
        payload
    }
}

/*GET NUMBER CART*/
export function GetNumberCart() {
    return {
        type: 'GET_NUMBER_CART'
    }
}

export function AddCart(payload) {
    return {
        type: 'ADD_CART',
        payload
    }
}
export function UpdateCart(payload) {
    return {
        type: 'UPDATE_CART',
        payload
    }
}
export function DeleteCart(payload) {
    return {
        type: 'DELETE_CART',
        payload
    }
}

export function IncreaseQuantity(payload) {
    return {
        type: 'INCREASE_QUANTITY',
        payload
    }
}
export function DecreaseQuantity(payload) {
    return {
        type: 'DECREASE_QUANTITY',
        payload
    }
}

