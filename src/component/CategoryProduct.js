import React, { useEffect, useState } from 'react'
import '../css/style.css'
import thuoc from "../asset/thuoc.jpg";
import banner3 from "../asset/banner3.jpg";
import banner2 from "../asset/banner2.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addCheckOut, getProduct } from '../store/actions/cart';
import { totalPage } from '../store/actions/pagination';
import AddSuccess from '../UI/AddSuccess/AddSuccess';
import axios from 'axios';

const CategoryProduct = () => {

    const dispatch = useDispatch();
    const dataProduct = useSelector(state => state.cart.listProduct)
    const [show,setShow] = useState(false)
    const [dataSale,setDataSale] = useState([])

    useEffect(() => {
        dispatch(getProduct())
        axios.get(`http://localhost:4000/pharmacy/topSale`)
            .then(res => {
                setDataSale(res.data.getPharmacySale)
            })
            .catch(err => console.log(err))
    }, [])

    function PricePromotion(price, promotion) {
        return (Number(price * promotion) / 100);
    }
    const showButton = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        },2000)
    }

    const resultData = () => {
        dispatch(totalPage(Math.ceil(dataProduct.length / 8)))
        const indexLastPost = 1 * 8;
        const indexFirstPost = indexLastPost - 8;
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
                                        <div className="ps-badge"><span>New</span></div>
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
                                        {
                                            localStorage.getItem('userToken') ? (
                                                <button
                                                    onClick={() => {
                                                        dispatch(addCart(item));
                                                        dispatch(addCheckOut(item._id));
                                                        showButton()
                                                    }}
                                                    style={{ border: 'none' }}
                                                >Thêm vào giỏ hàng</button>
                                            ) : (
                                                <Link to="/signIn">Đăng nhập ngay để mua sắm</Link>
                                            )
                                        }
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

    const resultData2 = () => {
        dispatch(totalPage(Math.ceil(dataSale.length / 4)))
        const indexLastPost = 1 * 4;
        const indexFirstPost = indexLastPost - 4;
        const pageSlice = dataSale.slice(indexFirstPost, indexLastPost)
        if (dataSale && dataSale.length) {
            let sttAcc = 0;
            return pageSlice.map((item) => {
                sttAcc++;
                return (
                    <div className="grid-item kids col-md-3 col-sm-6 col-xs-6" key={item._id}>
                        <div className="grid-item__content-wrapper">
                            <div className="ps-shoe mb-30">
                                <div className="ps-shoe__thumbnail">
                                    {item.status === "New" ? (
                                        <div className="ps-badge"><span>New</span></div>
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
                                        {
                                            localStorage.getItem('userToken') ? (
                                                <button
                                                    onClick={() => {
                                                        dispatch(addCart(item));
                                                        dispatch(addCheckOut(item._id));
                                                        showButton()
                                                    }}
                                                    style={{ border: 'none' }}
                                                >Thêm vào giỏ hàng</button>
                                            ) : (
                                                <Link to="/signIn">Đăng nhập ngay để mua sắm</Link>
                                            )
                                        }
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
                show ? <AddSuccess /> : null
            }
            <div className="ps-section--features-product ps-section masonry-root pt-100 pb-100">
                <div className="ps-container">
                    <div className="ps-section__header mb-50">
                        <h3 className="ps-section__title" data-mask="features">- SẢN PHẨM NỔI BẬT</h3>
                        {/* <div >
                            <ul className="ps-masonry__filter">
                                <li className="current"><a href="#" data-filter="*">All <sup>8</sup></a></li>
                                <li><a href="#" data-filter=".nike">Nike <sup>1</sup></a></li>
                                <li><a href="#" data-filter=".adidas">Adidas <sup>1</sup></a></li>
                                <li><a href="#" data-filter=".men">Men <sup>1</sup></a></li>
                                <li><a href="#" data-filter=".women">Women <sup>1</sup></a></li>
                                <li><a href="#" data-filter=".kids">Kids <sup>4</sup></a></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="ps-section__content pb-50">
                        <div className="masonry-wrapper">
                            <div className="ps-masonry row">
                                {/* <div className="grid-sizer"></div> */}
                                {resultData()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-section--offer">
                <div className="ps-column"><a className="ps-offer" href="product-listing.html"><img src={banner3} alt="" /></a></div>
                <div className="ps-column"><a className="ps-offer" href="product-listing.html"><img src={banner2} alt="" /></a></div>
            </div>
            <div className="ps-section ps-section--top-sales ps-owl-root pt-80 pb-80">
                <div className="ps-container">
                    <div className="ps-section__header mb-50">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                                <h3 className="ps-section__title" data-mask="BEST SALE">- Top Sales</h3>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                                <div className="ps-owl-actions"><a className="ps-prev" href="#"><i className="ps-icon-arrow-right"></i>Prev</a><a className="ps-next" href="#">Next<i className="ps-icon-arrow-left"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section__content">
                        <div className="ps-owl--colection owl-slider row">
                            {resultData2()}

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CategoryProduct
