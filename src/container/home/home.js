import React from 'react'
import CategoryProduct from '../../component/CategoryProduct'
import Footer from '../../component/Footer'
import HeaderArea from '../../component/Header/HeaderArea'
import Slider from '../../component/Slider'


const Home = () => {
    return (
        <>
            <HeaderArea />
            <Slider />
            <CategoryProduct />
            <Footer />
        </>
    )
}

export default Home
