import React, {useEffect} from 'react';
import {Header} from "./components/header";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./redux";
import {ProductList} from "./components/product_list";

export default function App() {
    const dispatch = useDispatch();

    const {cart, wishlist, products} = useSelector(({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
        cart, wishlist, products
    }))

    useEffect(() => {
        dispatch(setProducts())
    }, [])

    return (
        <div className='App'>
            <Header/>
            <ProductList products={products}/>
            <h1>{cart.length} {wishlist.length} {products.length}</h1>
        </div>
    );

}
