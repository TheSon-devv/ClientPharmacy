import React from 'react'
import Chat from '../../component/Chat'
import Contact from '../../component/Contact'
import Footer from '../../component/Footer'
import HeaderArea from '../../component/Header/HeaderArea'

const ContactContainer = () => {
    return (
        <div>
            <HeaderArea />
            <Contact />
            <Footer />
            <Chat />
        </div>
    )
}

export default ContactContainer
