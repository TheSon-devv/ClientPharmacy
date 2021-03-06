import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { headerAuthorization } from '../header'
import PaginationTable from "../component/Pagination/PaginationTable";
import { totalPage } from "../store/actions/pagination";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [dataBlog, setDataBlog] = useState([])
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.pagination.currentPage)
    const perPage = useSelector(state => state.pagination.perPage)

    useEffect(() => {
        axios.get(`http://localhost:4000/blog`)
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

    const convertDate = (date) => {
        let todayTime = new Date(date);
        let month = todayTime.getMonth() + 1;
        let day = todayTime.getDate();
        let year = todayTime.getFullYear();
        let hours = todayTime.getHours();
        let minutes = todayTime.getMinutes();
        let seconds = todayTime.getSeconds();
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
    };
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
                                <Link to={`/blog/${item._id}`} className="ps-post__overlay"></Link>
                                <img src={item.blogImage} alt="image" height="300" />
                            </div>
                            <div className="ps-post__content" >
                                <a className="ps-post__title" href="blog-detail.html">{item.nameBlog}</a>
                                <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                                    <p className="ps-post__meta" >
                                        <span className="ml-5">{convertDate(item.dateCreate)}</span>
                                    </p>
                                </div>

                                {/* <p>{item.information}</p><a className="ps-morelink" href="blog-detail.html">Read more<i className="fa fa-long-arrow-right"></i></a> */}
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
                        Kh??ng c?? d??? li???u ph?? h???p ! Vui l??ng t??m ki???m l???i .
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
