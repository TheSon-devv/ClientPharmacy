import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { headerAuthorization } from '../header'
import PaginationTable from "../component/Pagination/PaginationTable";
import { totalPage } from "../store/actions/pagination";
import { useDispatch, useSelector } from 'react-redux';

const Blog = () => {
    const [dataBlog, setDataBlog] = useState([])
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.pagination.currentPage)
    const perPage = useSelector(state => state.pagination.perPage)

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
    const resultData = () => {
        dispatch(totalPage(Math.ceil(dataBlog.length / perPage)))
        const indexLastPost = currentPage * perPage;
        const indexFirstPost = indexLastPost - perPage;
        const pageSlice = dataBlog.slice(indexFirstPost, indexLastPost)
        if (dataBlog && dataBlog.length) {
            let sttAcc = 0;
            return pageSlice.map((item) => {
                sttAcc++;
                return (
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 " key={item._id}>
                        <div className="ps-post mb-30">
                            <div className="ps-post__thumbnail">
                                <a className="ps-post__overlay" href="blog-detail.html"></a>
                                <img src={item.blogImage} alt="image" height="300" />
                            </div>
                            <div className="ps-post__content">
                                <a className="ps-post__title" href="blog-detail.html">{item.nameBlog}</a>
                                <p className="ps-post__meta"><span>By:<a className="mr-5" href="blog.html">Alena Studio</a></span> -<span className="ml-5">{item.dateCreate}</span></p>
                                <p>{item.information}</p><a className="ps-morelink" href="blog-detail.html">Read more<i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        else {
            // this.props.getTotalPage(0)
            return (
                <div style={{ width: '100%' }}>
                    <p
                        style={{
                            fontSize: "18px",
                            textAlign: "center",
                            margin: "20px 0 0 0",
                        }}
                    >
                        Không có dữ liệu phù hợp ! Vui lòng tìm kiếm lại .
                    </p>
                </div>
            );
        }
    }
    return (
        <main className="ps-main">
            <div className="ps-blog-grid pt-80 pb-80">
                <div className="ps-container">
                    <div className="row">
                        {resultData()}
                    </div>
                    <div className="mt-30">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <PaginationTable />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Blog
