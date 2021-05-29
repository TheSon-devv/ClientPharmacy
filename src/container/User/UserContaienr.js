import React from 'react'
import Chat from '../../component/Chat'
import Footer from '../../component/Footer'
import HeaderArea from '../../component/Header/HeaderArea'
import UserDetail from '../../component/UserDetail'

const UserContaienr = () => {
    return (
        <div>
            <HeaderArea />
            <UserDetail />
            <Footer />
            <Chat />
        </div>
    )
}

export default UserContaienr
