import React from 'react'
import HeaderArea from '../../component/Header/HeaderArea'
import ProductList from '../../component/ProductList'
import Footer from '../../component/Footer'
import Chat from '../../component/Chat'

const ProductListContainer = () => {
    return (
        <div>
            <HeaderArea />
            <ProductList />
            <Footer />
            <Chat />
        </div>
    )
}

export default ProductListContainer
