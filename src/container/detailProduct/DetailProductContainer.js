import React from 'react'
import Chat from '../../component/Chat'
import DetailProduct from '../../component/DetailProduct'
import Footer from '../../component/Footer'
import HeaderArea from '../../component/Header/HeaderArea'

const DetailProductContainer = () => {
    return (
        <div>
            <HeaderArea />
            <DetailProduct />
            <Footer />
            <Chat />
        </div>
    )
}

export default DetailProductContainer
