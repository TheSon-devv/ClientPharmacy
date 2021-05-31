import React, { useEffect, useState } from 'react';
import '../css/style.css';
// import '../css/responsive.css';
import thuoc from "../asset/thuoc.jpg";
import detail from "../asset/detail.jpg";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { headerAuthorization } from '../header';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addCheckOut } from '../store/actions/cart';
import { totalPage } from '../store/actions/pagination';
import AddSuccess from '../UI/AddSuccess/AddSuccess';

const DetailProduct = () => {
    let id = useParams();
    const dispatch = useDispatch();
    const [data, setData] = useState([])
    const dataProduct = useSelector(state => state.cart.listProduct)
    const [show, setShow] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:4000/pharmacy/${id.id}`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => console.log(err))
        axios.get(`http://localhost:4000/pharmacy/topSale`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const showButton = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 2000)
    }
    const resultData = () => {
        dispatch(totalPage(Math.ceil(dataProduct.length / 4)))
        const indexLastPost = 1 * 4;
        const indexFirstPost = indexLastPost - 4;
        const pageSlice = dataProduct.slice(indexFirstPost, indexLastPost)
        if (dataProduct && dataProduct.length) {
            let sttAcc = 0;
            return pageSlice.map((item) => {
                sttAcc++;
                return (
                    <div className="grid-item kids col-md-3 col-sm-6 col-xs-6" key={item._id}>
                        <div className="grid-item__content-wrapper">
                            <div className="ps-shoe mb-30">
                                <div className="ps-shoe__thumbnail">
                                    {item.status === "New" ? (
                                        <div className="ps-badge"><span>Mới</span></div>
                                    ) : null}
                                    {
                                        item.promotion ? (
                                            <div className="ps-badge ps-badge--sale ps-badge--2nd">
                                                <span>-{item.promotion}%</span>
                                            </div>
                                        ) : null
                                    }
                                    <a className="ps-shoe__favorite" href="#"><i className="fa fa-heart"></i></a>
                                    <img src={item.pharmacyImage} alt="" width="700" height="350" />
                                    <Link className="ps-shoe__overlay" to={`/detailProduct/${item._id}`}></Link>
                                </div>
                                <div className="ps-shoe__content">
                                    <div className="ps-shoe__variants" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <button
                                            onClick={() => {
                                                dispatch(addCart(item));
                                                dispatch(addCheckOut(item._id));
                                                showButton()
                                            }}
                                            style={{ border: 'none' }}
                                        >Thêm vào giỏ hàng</button>
                                    </div>
                                    <div className="ps-shoe__detail"><a className="ps-shoe__name" href="#">{item.namePharmacy}</a>
                                        <p className="ps-shoe__categories">
                                            {
                                                item.typePharmacy.map(item => {
                                                    return (
                                                        <a href="#" key={item._id}>{item.nameTypePharmacy}</a>
                                                    )
                                                })
                                            }
                                        </p>

                                        {
                                            item.promotion ? (
                                                <span className="ps-shoe__price">
                                                    <del style={{ marginRight: 10 }}>{item.pricePharmacy}$</del>{item.totalPromotion}$
                                                </span>
                                            ) : (
                                                <span className="ps-shoe__price">
                                                    {item.totalPromotion}$
                                                </span>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        else {
            // this.props.getTotalPage(0)
            return (
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                    <p
                        style={{
                            fontSize: "18px",
                            textAlign: "center",
                            margin: "20px 0 0 0",
                        }}
                    >
                        Không có dữ liệu ! .
                    </p>
                </div>
            );
        }
    }
    return (
        <main className="ps-main">
            {
                show ? <AddSuccess title="Đã thêm vào giỏ hàng !" /> : null
            }
            <div className="test">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
                        </div>
                    </div>
                </div>
            </div>
            {
                data.map(item => {
                    return (
                        <div className="ps-product--detail pt-60" key={item._id}>
                            <div className="ps-container">
                                <div className="row">
                                    <div className="col-lg-10 col-md-12 col-lg-offset-1">
                                        <div className="ps-product__thumbnail">
                                            <div className="ps-product__preview">
                                                <div className="ps-product__variants">

                                                </div>

                                            </div>
                                            <div className="ps-product__image">
                                                <div className="item" style={{ border: '1px solid #ffd6d6', borderRadius: '10px' }}>
                                                    <img className="zoom" src={item.pharmacyImage} alt="" width="1500" height="500" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-product__thumbnail--mobile">
                                            <div className="ps-product__main-img"><img src={detail} alt="" /></div>
                                            <div className="ps-product__preview owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="5000" data-owl-gap="20" data-owl-nav="true" data-owl-dots="false" data-owl-item="3" data-owl-item-xs="3" data-owl-item-sm="3" data-owl-item-md="3" data-owl-item-lg="3" data-owl-duration="1000" data-owl-mousedrag="on"><img src="images/shoe-detail/1.jpg" alt="" /><img src="images/shoe-detail/2.jpg" alt="" /><img src="images/shoe-detail/3.jpg" alt="" /></div>
                                        </div>
                                        <div className="ps-product__info">
                                            <div className="ps-product__rating">
                                            </div>
                                            <h1>{item.namePharmacy}</h1>
                                            <p className="ps-product__category">
                                                {
                                                    item.typePharmacy.map(item => {
                                                        return (
                                                            <a href="#" key={item}>{item.nameTypePharmacy}</a>
                                                        )
                                                    })
                                                }
                                            </p>
                                            {
                                                item.promotion ? (
                                                    <h3 className="ps-product__price">{item.totalPromotion} $<del>{item.pricePharmacy} $</del></h3>
                                                ) : (
                                                    <h3 className="ps-product__price">{item.pricePharmacy} $</h3>
                                                )
                                            }

                                            <div className="ps-product__block ps-product__quickview">
                                                <h4>Thông tin chi tiết</h4>
                                                <pre style={{ fontFamily: 'Montserrat', fontSize: 16 }}>{item.information}</pre>
                                            </div>

                                            <div className="ps-product__shopping">
                                                {
                                                    localStorage.getItem('userToken') ? (
                                                        <button
                                                            className="ps-btn mb-10"
                                                            style={{ textDecoration: 'none' }}
                                                            onClick={() => {
                                                                dispatch(addCart(item));
                                                                dispatch(addCheckOut(item._id));
                                                                showButton()
                                                            }} /////////Add cart
                                                        >
                                                            Thêm vào giỏ hàng<i className="ps-icon-next"></i>
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="ps-btn mb-10"
                                                            style={{ textDecoration: 'none' }}
                                                            onClick={() => {
                                                                alert("Vui lòng đăng nhập để mua hàng !")
                                                            }} /////////Add cart
                                                        >
                                                            Thêm vào giỏ hàng<i className="ps-icon-next"></i>
                                                        </button>
                                                    )
                                                }
                                                <div className="ps-product__actions">
                                                    <a className="mr-10" href="whishlist.html"><i className="fa fa-heart"></i></a><a href="compare.html"><i className="fa fa-share"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="ps-product__content mt-50">

                                        </div>
                                    </div>
                                </div>

                                <div className="ps-section__header mb-50" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 className="ps-section__title" data-mask="pharmacy">- CÓ THỂ BẠN QUAN TÂM</h3>
                                    <div>
                                        <Link

                                            style={{ textDecoration: 'none' }}
                                            to="/productList"
                                        >Xem tất cả<i className="fa fa-arrow-right" style={{ marginLeft: 20 }}></i></Link>
                                    </div>
                                </div>
                                <div className="ps-section__content pb-80">
                                    <div className="masonry-wrapper">
                                        <div className="ps-masonry row">
                                            {/* <div className="grid-sizer"></div> */}
                                            {resultData()}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }

        </main>
    )
}

export default DetailProduct
