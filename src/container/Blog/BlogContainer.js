import React from 'react'
import Blog from '../../component/Blog'
import Chat from '../../component/Chat'
import Footer from '../../component/Footer'
import HeaderArea from '../../component/Header/HeaderArea'

const BlogContainer = () => {
    return (
        <div>
            <HeaderArea />
            <Blog />
            <Footer />
            <Chat />
        </div>
    )
}

export default BlogContainer
