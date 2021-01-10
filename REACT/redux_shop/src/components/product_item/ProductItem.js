import React from 'react';

export const ProductItem = ({isAddedToCart,isAddedToWishList,onAddToCart,onAddToWishList,product,product: {id, title, description, price}}) => {
        return (
            <div>
                <h5>{id}</h5>
                <h5>{title}</h5>
                <h5>{price}</h5>
                <h5>{description}</h5>
                    <button
                        style={{background: isAddedToCart ? 'red' : 'green'}}
                        onClick={() => onAddToCart(product)}>{isAddedToCart ? 'RemoveFromCart':'AddToCart'}</button>
                    <button
                        style={{background: isAddedToWishList ? 'red' : 'green'}}
                        onClick={() => onAddToWishList(product)}>{isAddedToWishList? 'RemoveFromWishList' : 'AddToWishList'}</button>
                <hr/>
            </div>
        );
}

