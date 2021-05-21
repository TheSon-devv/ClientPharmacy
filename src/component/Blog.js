import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { headerAuthorization } from '../header'


const Blog = () => {
    const [dataBlog, setDataBlog] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/blog`, headerAuthorization())
            .then(res => {
                if (res.data.code === 200) {
                    console.log(res.data);
                    setDataBlog(res.data.getBlog);
                }
                if (res.data.code === 401) {
                    alert('Loi roi')
                }
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <main className="ps-main">
            <div className="ps-blog-grid pt-80 pb-80">
                <div className="ps-container">
                    <div className="row">

                        {
                            dataBlog.map(item => (
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 " key={item._id}>
                                    <div className="ps-post mb-30">
                                        <div className="ps-post__thumbnail">
                                            <a className="ps-post__overlay" href="blog-detail.html"></a>
                                            <img src={item.blogImage} alt="image" />
                                        </div>
                                        <div className="ps-post__content">
                                            <a className="ps-post__title" href="blog-detail.html">{item.nameBlog}</a>
                                            <p className="ps-post__meta"><span>By:<a className="mr-5" href="blog.html">Alena Studio</a></span> -<span className="ml-5">{item.dateCreate}</span></p>
                                            <p>{item.information}</p><a className="ps-morelink" href="blog-detail.html">Read more<i className="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="mt-30">
                        <div className="ps-pagination">
                            <ul className="pagination">
                                <li><a href="#"><i className="fa fa-angle-left"></i></a></li>
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">...</a></li>
                                <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Blog
