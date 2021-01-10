import {services} from '../../services'
import {ADD_TO_CART, ADD_TO_WISHLIST, SET_PRODUCTS} from "../action-types";

const {productService} = services

export const setProducts = () => async(dispatch) => {
    const response = await productService.getProducts();
    const json = await response.json();

    dispatch({type: SET_PRODUCTS, payload: json})
}

export const addToCart = (product) => ({type: ADD_TO_CART, payload: product})
export const addToWishList = (product) => ({type: ADD_TO_WISHLIST, payload: product})