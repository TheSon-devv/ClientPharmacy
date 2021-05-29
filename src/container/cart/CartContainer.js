import React from 'react'
import Cart from '../../component/Cart'
import Chat from '../../component/Chat'
import Footer from '../../component/Footer'
import HeaderArea from '../../component/Header/HeaderArea'

const CartContainer = () => {
    return (
        <div>
            <HeaderArea />
            <Cart />
            <Footer />
            <Chat />
        </div>
    )
}

export default CartContainer
