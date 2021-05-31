import React from 'react'
import Chat from '../../component/Chat'
import Doctor from '../../component/Doctor'
import Footer from '../../component/Footer'
import HeaderAreaFix from '../../component/Header/HeaderAreaFix'
const DoctorContainer = () => {
    return (
        <div>
            <HeaderAreaFix />
            <Doctor />
            <Footer />
            <Chat />
        </div>
    )
}

export default DoctorContainer
