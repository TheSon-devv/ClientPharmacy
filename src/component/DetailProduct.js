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
                                                    <div className="item"><img src="images/shoe-detail/1.jpg" alt="" /></div>
                                                    <div className="item"><img src="images/shoe-detail/2.jpg" alt="" /></div>
                                                    <div className="item"><img src="images/shoe-detail/3.jpg" alt="" /></div>
                                                    <div className="item"><img src="images/shoe-detail/3.jpg" alt="" /></div>
                                                    <div className="item"><img src="images/shoe-detail/3.jpg" alt="" /></div>
                                                </div><a className="popup-youtube ps-product__video" href="http://www.youtube.com/watch?v=0O2aH4XLbto"><img src={detail} alt="" /><i className="fa fa-play"></i></a>
                                            </div>
                                            <div className="ps-product__image">
                                                <div className="item">
                                                    <img className="zoom" src={item.pharmacyImage} alt="" width="1860" height="700" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-product__thumbnail--mobile">
                                            <div className="ps-product__main-img"><img src={detail} alt="" /></div>
                                            <div className="ps-product__preview owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="5000" data-owl-gap="20" data-owl-nav="true" data-owl-dots="false" data-owl-item="3" data-owl-item-xs="3" data-owl-item-sm="3" data-owl-item-md="3" data-owl-item-lg="3" data-owl-duration="1000" data-owl-mousedrag="on"><img src="images/shoe-detail/1.jpg" alt="" /><img src="images/shoe-detail/2.jpg" alt="" /><img src="images/shoe-detail/3.jpg" alt="" /></div>
                                        </div>
                                        <div className="ps-product__info">
                                            <div className="ps-product__rating">
                                                {/* <select className="ps-rating">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                        <option value="2">5</option>
                                    </select><a href="#">(Read all 8 reviews)</a> */}
                                            </div>
                                            <h1>{item.namePharmacy}</h1>
                                            <p className="ps-product__category"><a href="#"> Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p>
                                            <h3 className="ps-product__price">{item.pricePharmacy} <del>£ 330</del></h3>
                                            <div className="ps-product__block ps-product__quickview">
                                                <h4>QUICK REVIEW</h4>
                                                <p >{item.information}</p>
                                            </div>
                                            <div className="ps-product__block ps-product__style">
                                                <h4>CHOOSE YOUR STYLE</h4>
                                                <ul>
                                                    <li><a href="product-detail.html"><img src="images/shoe/sidebar/1.jpg" alt="" /></a></li>
                                                    <li><a href="product-detail.html"><img src="images/shoe/sidebar/2.jpg" alt="" /></a></li>
                                                    <li><a href="product-detail.html"><img src="images/shoe/sidebar/3.jpg" alt="" /></a></li>
                                                    <li><a href="product-detail.html"><img src="images/shoe/sidebar/2.jpg" alt="" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="ps-product__block ps-product__size">
                                                <h4>CHOOSE SIZE<a href="#">Size chart</a></h4>
                                                {/* <select className="ps-select selectpicker">
                                        <option value="1">Select Size</option>
                                        <option value="2">4</option>
                                        <option value="3">4.5</option>
                                        <option value="3">5</option>
                                        <option value="3">6</option>
                                        <option value="3">6.5</option>
                                        <option value="3">7</option>
                                        <option value="3">7.5</option>
                                        <option value="3">8</option>
                                        <option value="3">8.5</option>
                                        <option value="3">9</option>
                                        <option value="3">9.5</option>
                                        <option value="3">10</option>
                                    </select> */}
                                                <div className="form-group">
                                                    {/* <input className="form-control" type="number" value="1" /> */}
                                                </div>
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
                                            <ul className="tab-list" role="tablist">
                                                <li className="active"><a href="#tab_01" aria-controls="tab_01" role="tab" data-toggle="tab">Overview</a></li>
                                                <li><a href="#tab_02" aria-controls="tab_02" role="tab" data-toggle="tab">Review</a></li>
                                                <li><a href="#tab_03" aria-controls="tab_03" role="tab" data-toggle="tab">PRODUCT TAG</a></li>
                                                <li><a href="#tab_04" aria-controls="tab_04" role="tab" data-toggle="tab">ADDITIONAL</a></li>
                                            </ul>
                                        </div>
                                        <div className="tab-content mb-60">
                                            <div className="tab-pane active" role="tabpanel" id="tab_01">
                                                <p>{item.information}</p>
                                            </div>
                                            <div className="tab-pane" role="tabpanel" id="tab_02">
                                                <p className="mb-20">1 review for <strong>Shoes Air Jordan</strong></p>
                                                <div className="ps-review">
                                                    <div className="ps-review__thumbnail"><img src="images/user/1.jpg" alt="" /></div>
                                                    <div className="ps-review__content">
                                                        <header>
                                                            {/* <select className="ps-rating">
                                                    <option value="1">1</option>
                                                    <option value="1">2</option>
                                                    <option value="1">3</option>
                                                    <option value="1">4</option>
                                                    <option value="5">5</option>
                                                </select> */}
                                                            <p>By<a href=""> Alena Studio</a> - November 25, 2017</p>
                                                        </header>
                                                        <p>Soufflé danish gummi bears tart. Pie wafer icing. Gummies jelly beans powder. Chocolate bar pudding macaroon candy canes chocolate apple pie chocolate cake. Sweet caramels sesame snaps halvah bear claw wafer. Sweet roll soufflé muffin topping muffin brownie. Tart bear claw cake tiramisu chocolate bar gummies dragée lemon drops brownie.</p>
                                                    </div>
                                                </div>
                                                <form className="ps-product__review" action="_action" method="post">
                                                    <h4>ADD YOUR REVIEW</h4>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                                            <div className="form-group">
                                                                <label>Name:<span>*</span></label>
                                                                <input className="form-control" type="text" placeholder="" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Email:<span>*</span></label>
                                                                <input className="form-control" type="email" placeholder="" />
                                                            </div>
                                                            {/* <div className="form-group">
                                                    <label>Your rating<span></span></label>
                                                    <select className="ps-rating">
                                                        <option value="1">1</option>
                                                        <option value="1">2</option>
                                                        <option value="1">3</option>
                                                        <option value="1">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </div> */}
                                                        </div>
                                                        <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12 ">
                                                            <div className="form-group">
                                                                <label>Your Review:</label>
                                                                <textarea className="form-control" rows="6"></textarea>
                                                            </div>
                                                            <div className="form-group">
                                                                <button className="ps-btn ps-btn--sm">Submit<i className="ps-icon-next"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane" role="tabpanel" id="tab_03">
                                                <p>Add your tag <span> *</span></p>
                                                <form className="ps-product__tags" action="_action" method="post">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="" />
                                                        <button className="ps-btn ps-btn--sm">Add Tags</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane" role="tabpanel" id="tab_04">
                                                <div className="form-group">
                                                    <textarea className="form-control" rows="6" placeholder="Enter your addition here..."></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <button className="ps-btn" type="button">Submit</button>
                                                </div>
                                            </div>
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
