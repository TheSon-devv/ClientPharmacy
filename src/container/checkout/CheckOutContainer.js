import React from 'react'
import Chat from '../../component/Chat'
import Checkout from '../../component/Checkout'
import Footer from '../../component/Footer'
import HeaderArea from '../../component/Header/HeaderArea'

const CheckOutContainer = () => {
    return (
        <div>
            <HeaderArea />
            <Checkout />
            <Footer />
            <Chat />
        </div>
    )
}

export default CheckOutContainer
