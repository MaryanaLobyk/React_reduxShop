import React from 'react';
import {ProductItem} from "../product_item";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, addToWishList} from "../../redux";

export const ProductList = ({products}) => {

    const dispatch = useDispatch();
    const {wishlist, cart} = useSelector(({wishlist: {wishlist}, cart: {cart}}) => ({
        cart, wishlist
    }))

    const onAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const onAddToWishList = (product) => {
        dispatch(addToWishList(product))
    }

        return (
            <div>
                {products.map(product => {
                    return <ProductItem
                        isAddedToCart={!!cart.find(({id}) => id === product.id)}
                        isAddedToWishList={!!wishlist.find(({id}) => id === product.id)}
                        onAddToCart={onAddToCart}
                        onAddToWishList={onAddToWishList}
                        product={product} key={product.id}/>
                })}
            </div>
        );
}

