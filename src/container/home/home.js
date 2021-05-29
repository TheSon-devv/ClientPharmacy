import React from 'react'
import CategoryProduct from '../../component/CategoryProduct'
import Chat from '../../component/Chat'
import Footer from '../../component/Footer'
import HeaderArea from '../../component/Header/HeaderArea'
import Slider from '../../component/Slider'
import Slider2 from '../../component/Slider2'


const Home = () => {
    return (
        <>
            <HeaderArea />
            <Slider />
            <CategoryProduct />
            <Slider2 />
            <Footer />
            <Chat />
        </>
    )
}

export default Home
