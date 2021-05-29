import React from 'react'
import Chat from '../../component/Chat'
import Doctor from '../../component/Doctor'
import Footer from '../../component/Footer'
import HeaderArea from '../../component/Header/HeaderArea'
const DoctorContainer = () => {
    return (
        <div>
            <HeaderArea />
            <Doctor />
            <Footer />
            <Chat />
        </div>
    )
}

export default DoctorContainer
