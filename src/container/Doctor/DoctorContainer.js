import React from 'react'
import Chat from '../../component/Chat'
import Doctor from '../../component/Doctor'
import Footer from '../../component/Footer'
import HeaderArea from '../../component/Header/HeaderArea'
const DoctorContainer = (props) => {
    return (
        <div>
            <HeaderArea />
            <Doctor {...props}/>
            <Footer />
            <Chat />
        </div>
    )
}

export default DoctorContainer
