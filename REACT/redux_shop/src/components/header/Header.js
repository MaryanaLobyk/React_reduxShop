import React from "react";
import '../../App.css'
import {useSelector} from "react-redux";

export const Header = () => {

    const{cart, wishlist} = useSelector(({cart: {cart}, wishlist: {wishlist}}) => ({
        cart, wishlist
    }))

    return(
        <header className='just-between d-flex align-center'>
            <h1>Home</h1>
            <div className='just-between d-flex align-center'>
                <div title={cart.reduce((acc, value) => acc + value.price, 0)} className='mx-10'>Cart: {cart.length}</div>
                <div title={wishlist.reduce((acc, value) => acc + value.price, 0)} className='mx-10'>WishList: {wishlist.length}</div>
            </div>
        </header>
    )
}