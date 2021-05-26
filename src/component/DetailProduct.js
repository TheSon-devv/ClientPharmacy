import React, { useEffect, useState } from 'react';
import '../css/style.css';
// import '../css/responsive.css';
import thuoc from "../asset/thuoc.jpg";
import detail from "../asset/detail.jpg";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { headerAuthorization } from '../header';
import { useDispatch } from 'react-redux';
import { addCart, addCheckOut } from '../store/actions/cart';

const DetailProduct = () => {
    let id = useParams();
    const dispatch = useDispatch();
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/pharmacy/${id.id}`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <main className="ps-main">
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
                                                <div className="item">
                                                    <img className="zoom" src={item.pharmacyImage} alt="" width="1860" height="500" />
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

                                            <div className="ps-product__block ps-product__quickview" style={{ height: '390px' }}>
                                                <h4>Thông tin chi tiết</h4>
                                                <p >{item.information}</p>
                                            </div>

                                            <div className="ps-product__shopping">
                                                {
                                                    localStorage.getItem('userToken') ? (
                                                        <button
                                                            className="ps-btn mb-10"
                                                            style={{ textDecoration: 'none' }}
                                                            onClick={() => {
                                                                dispatch(addCart(item));
                                                                dispatch(addCheckOut(item._id))
                                                            }} /////////Add cart
                                                        >
                                                            Add to cart<i className="ps-icon-next"></i>
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="ps-btn mb-10"
                                                            style={{ textDecoration: 'none' }}
                                                            onClick={() => {
                                                                alert("Vui lòng đăng nhập để mua hàng !")
                                                            }} /////////Add cart
                                                        >
                                                            Add to cart<i className="ps-icon-next"></i>
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
                            </div>
                        </div>
                    )
                })
            }

        </main>
    )
}

export default DetailProduct
