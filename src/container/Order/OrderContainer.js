import React from 'react'
import HeaderArea from "../../component/Header/HeaderArea";
import Footer from "../../component/Footer";
import Order from '../../component/Order';
import Chat from '../../component/Chat';

const OrderContainer = () => {
    return (
        <div>
            <HeaderArea />
            <Order />
            <Footer />
            <Chat />
        </div>
    )
}

export default OrderContainer
