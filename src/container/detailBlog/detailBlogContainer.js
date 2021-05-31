import React from 'react'
import Footer from '../../component/Footer'
import BlogDetail from '../../component/BlogDetail'
import HeaderArea from '../../component/Header/HeaderArea'

const detailBlogContainer = () => {
    return (
        <div>
            <HeaderArea />
            <BlogDetail />
            <Footer />
        </div>
    )
}

export default detailBlogContainer
