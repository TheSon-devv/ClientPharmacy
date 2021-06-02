import React from 'react'
import CategoryProduct from '../../component/CategoryProduct'
import Chat from '../../component/Chat'
import Footer from '../../component/Footer'
import HeaderAreaFix from '../../component/Header/HeaderAreaFix'
import Slider from '../../component/Slider'
import Slider2 from '../../component/Slider2'
import Slider3 from '../../component/Slider3'
import Slider4 from '../../component/Slider4'
import Slider5 from '../../component/Slider5'
import Slider6 from '../../component/Slider6'


const Home = () => {
    return (
        <>
            <HeaderAreaFix />
            <Slider5 />
            <Slider6 />
            <Slider />
            <CategoryProduct />
            <Slider3 />
            <Slider4 />
            <Slider2 />
            <Footer />
            <Chat />
        </>
    )
}

export default Home
