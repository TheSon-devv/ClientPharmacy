import React, { useEffect, useState } from 'react'
import '../../css/style.css'
import { Link, Redirect } from "react-router-dom";
import Logo from "../../asset/logo-app.png";
import { useDispatch, useSelector } from 'react-redux';
import { authLogOut, logOut } from '../../store/actions/auth';
import SideDrawer from '../SideDrawer/SideDrawer';
import classes from "../SideDrawer/SideDrawer.module.css";
import { deleteCart, reloadCart, saveCart } from '../../store/actions/cart';
import banner from "../../asset/banner.png";
import bannerHomeHeader from "../../asset/bannerHomeHeader.svg";
import bannerHotHeader2 from "../../asset/bannerHotHeader2.svg";
import bacsy from "../../asset/bacsy.png";
import axios from 'axios';

const HeaderAreaFix = () => {
    const dispatch = useDispatch()
    const [showDrawer, setShowDrawer] = useState(true)
    const numberCart = useSelector(state => state.cart.numberCart)
    const item = useSelector(state => state.cart.listCart)

    useEffect(() => {
        axios.get('http://localhost:3000/employee')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [])

    function TotalPrice(quantity, price) {
        return Number(quantity * price).toFixed(2)
    }

    return (
        <div >
            <div className="header--sidebar"></div>
            <header className="header px-2">
                <nav className="navigation">
                    <div className="container-fluid row">
                        <div className={showDrawer ? "navigation__column left" : "navigation__column left showX"} style={{ zIndex: 10, display: 'flex', justifyContent: 'center' }}>
                            <div className="header__logo ml-2">
                                <Link className="ps-logo" to="/"><img src={Logo} alt="" style={{ width: '65px', height: '60px' }} /></Link>

                                <span style={{ color: 'blue', fontSize: 25, fontWeight: 'bold', marginLeft: 10 }}>Viet<span style={{ color: 'red', fontWeight: 'bold' }}>Skin</span></span>

                            </div>
                        </div>
                        <div className="navigation__column center menu_hidden" style={{ zIndex: 10 }}>
                            <ul className="main-menu menu">
                                <li className="menu-item menu-item-has-children dropdown"><Link to="/" style={{ textDecoration: 'none' }}>Trang ch???</Link>
                                    {/* <ul className="sub-menu">
                                        <li className="menu-item"><a href="index.html">Homepage #1</a></li>
                                        <li className="menu-item"><a href="#">Homepage #2</a></li>
                                        <li className="menu-item"><a href="#">Homepage #3</a></li>
                                    </ul> */}
                                </li>
                                <li className="menu-item menu-item-has-children dropdown"><Link to="/doctor" style={{ textDecoration: 'none' }}>B??c s??</Link>
                                </li>
                                <li className="menu-item menu-item-has-children has-mega-menu"><Link to="/productList" style={{ textDecoration: 'none' }}>S???n ph???m</Link>
                                    {/* <div className="mega-menu">
                                        <div className="mega-wrap row px-2">
                                            <div className="mega-column">
                                                <ul className="mega-item mega-features">
                                                    <li><Link to="/signIn">NEW RELEASES</Link></li>
                                                    <li><a href="product-listing.html">FEATURES SHOES</a></li>
                                                    <li><a href="product-listing.html">BEST SELLERS</a></li>
                                                    <li><a href="product-listing.html">NOW TRENDING</a></li>
                                                    <li><a href="product-listing.html">SUMMER ESSENTIALS</a></li>
                                                    <li><a href="product-listing.html">MOTHER'S DAY COLLECTION</a></li>
                                                    <li><a href="product-listing.html">FAN GEAR</a></li>
                                                </ul>
                                            </div>



                                            <div className="mega-column">
                                                <h4 className="mega-heading">BRAND</h4>
                                                <ul className="mega-item">
                                                    <li><Link to="/signIn">NIKE</Link></li>
                                                    <li><a href="product-listing.html">Adidas</a></li>
                                                    <li><a href="product-listing.html">Dior</a></li>
                                                    <li><a href="product-listing.html">B&G</a></li>
                                                </ul>
                                            </div>

                                            <div className="mega-column">
                                                <h4 className="mega-heading">BRAND</h4>
                                                <ul className="mega-item">
                                                    <li><a href="product-listing.html">NIKE</a></li>
                                                    <li><a href="product-listing.html">Adidas</a></li>
                                                    <li><a href="product-listing.html">Dior</a></li>
                                                    <li><a href="product-listing.html">B&G</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-column">
                                                <h4 className="mega-heading">BRAND</h4>
                                                <ul className="mega-item">
                                                    <li><a href="product-listing.html">NIKE</a></li>
                                                    <li><a href="product-listing.html">Adidas</a></li>
                                                    <li><a href="product-listing.html">Dior</a></li>
                                                    <li><a href="product-listing.html">B&G</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div> */}
                                </li>
                                <li className="menu-item menu-item-has-children dropdown"><Link to="/blog" style={{ textDecoration: 'none' }}>Tin t???c</Link>
                                    {/* <ul className="sub-menu">
                                        <li className="menu-item"><a href="index.html">Homepage #1</a></li>
                                        <li className="menu-item"><a href="#">Homepage #2</a></li>
                                        <li className="menu-item"><a href="#">Homepage #3</a></li>
                                    </ul> */}
                                </li>
                                <li className="menu-item menu-item-has-children dropdown"><Link to="/contact" style={{ textDecoration: 'none' }}>Li??n h???</Link>
                                    {/* <ul className="sub-menu">
                                        <li className="menu-item"><a href="index.html">Homepage #1</a></li>
                                        <li className="menu-item"><a href="#">Homepage #2</a></li>
                                        <li className="menu-item"><a href="#">Homepage #3</a></li>
                                    </ul> */}
                                </li>
                            </ul>
                        </div>
                        <div className="navigation__column right" style={{ zIndex: 10 }}>
                            {
                                localStorage.getItem('userToken') !== null ? (
                                    <div className="row" style={{ justifyContent: 'center' }}>
                                        <div className="menu_hidden">
                                            <ul className="main-menu menu">
                                                <li className="menu-item menu-item-has-children dropdown" style={{ marginLeft: "-80px" }}>
                                                    <Link to="/" style={{ textDecoration: 'none' }}><i className="fa fa-user"></i></Link>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item">
                                                            <Link to="/detailUser" style={{ textDecoration: 'none' }}>Th??ng tin c?? nh??n</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link to="/order" style={{ textDecoration: 'none' }}>L???ch s??? ????n h??ng</Link>
                                                        </li>
                                                        <li className="menu-item" onClick={() => {
                                                            dispatch(authLogOut());
                                                            dispatch(reloadCart())
                                                        }}>
                                                            <Link to="/" style={{ textDecoration: 'none' }}>
                                                                ????ng xu???t
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="ps-cart">
                                            <a className="ps-cart__toggle" href="#">
                                                <span><i>{numberCart}</i></span><i className="fa fa-shopping-cart"></i>
                                            </a>
                                            <div className="ps-cart__listing" >
                                                <div className="ps-cart__content" >

                                                    {
                                                        item && item.length ? (
                                                            item.map((e, key) => {
                                                                return (
                                                                    <div className="ps-cart-item" key={e._id}>
                                                                        <div className="ps-cart-item__close" onClick={() => dispatch(deleteCart(key))}></div>
                                                                        <div className="ps-cart-item__thumbnail">
                                                                            <a href="#"></a><img src={e.pharmacyImage} alt="" />
                                                                        </div>
                                                                        <div className="ps-cart-item__content">
                                                                            <p className="ps-cart-item__title" style={{ color: '#fff' }}>{e.namePharmacy}</p>
                                                                            <p>
                                                                                <span>Quantity:<i>{e.quantity}</i></span>
                                                                                <span style={{ marginLeft: '-10px' }}>Total:<i>{TotalPrice(e.quantity, e.pricePharmacy)}$</i></span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        ) : null
                                                    }

                                                </div>
                                                {/* <div className="ps-cart__total">
                                                    <p>Number of items:<span>36</span></p>
                                                    <p>Item Total:<span>??528.00</span></p>
                                                </div> */}
                                                {
                                                    numberCart !== 0
                                                        ? (<div className="ps-cart__footer" onClick={() => dispatch(saveCart())}><Link className="ps-btn" to="/cart" style={{ textDecoration: 'none' }}>Xem gi??? h??ng<i className="fa fa-arrow-right"></i></Link></div>)
                                                        : (<div className="ps-cart__footer py-5 px-2" style={{}}>Ch??a c?? s???n ph???m trong gi??? h??ng</div>)
                                                }
                                            </div>
                                        </div>
                                        <div className={showDrawer ? "menu-toggle" : "menu-toggle test"} onClick={() => setShowDrawer(o => !o)}><span></span></div>

                                        <SideDrawer open={showDrawer} />
                                    </div>

                                )
                                    :
                                    (
                                        <>

                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <div style={{ marginTop: 25, marginRight: 10 }}>
                                                    <button style={{ backgroundColor: "rgb(48,101,193)", padding: '10px 15px', border: 'none', borderRadius: 30 }}><Link to="/signIn" style={{ textDecoration: 'none', color: '#fff' }}>????ng nh???p</Link></button>
                                                </div>
                                                <div className="ps-cart" >
                                                    <a className="ps-cart__toggle" href="#">
                                                        <span><i>{numberCart}</i></span><i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                    <div className="ps-cart__listing">
                                                        <div className="ps-cart__content">

                                                            {
                                                                item && item.length ? (
                                                                    item.map((e, key) => {
                                                                        return (
                                                                            <div className="ps-cart-item" key={e._id}>
                                                                                <div className="ps-cart-item__close" onClick={() => dispatch(deleteCart(key))}></div>
                                                                                <div className="ps-cart-item__thumbnail">
                                                                                    <a href="#"></a><img src={e.pharmacyImage} alt="" />
                                                                                </div>
                                                                                <div className="ps-cart-item__content">
                                                                                    <p className="ps-cart-item__title" style={{ color: '#fff' }}>{e.namePharmacy}</p>
                                                                                    <p>
                                                                                        <span>Quantity:<i>{e.quantity}</i></span>
                                                                                        <span style={{ marginLeft: '-10px' }}>Total:<i>{TotalPrice(e.quantity, e.pricePharmacy)}$</i></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                ) : null
                                                            }

                                                        </div>
                                                        {
                                                            numberCart !== 0
                                                                ? (<div className="ps-cart__footer"><Link className="ps-btn" to="/cart" style={{ textDecoration: 'none' }}>Xem gi??? h??ng<i className="fa fa-arrow-right"></i></Link></div>)
                                                                : (<div className="ps-cart__footer py-5 px-2" style={{}}>Ch??a c?? s???n ph???m trong gi??? h??ng</div>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                            }
                        </div>
                    </div>
                </nav>
            </header>
            {/* <div className="header-services mb-3" style={{ backgroundColor: 'rgb(48,101,193)', zIndex: '10' }}>
                <div className="ps-services owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="7000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="false" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on">
                    <p className="ps-service" style={{ color: "#fff" }}>
                        <i className="ps-icon-delivery"></i>
                        <strong style={{ color: "#fff" }}>Mi???n ph?? v???n chuy???n</strong>: ??u ????i d??nh ri??ng cho kh??ch h??ng thanh to??n qua PalPay</p>
                </div>
            </div> */}
            <div
                style={{
                    backgroundImage: `url(${bannerHomeHeader})`, height: '900px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                    position: 'relative', backgroundPosition: 'center', margin: '-110px 0 80px 0', paddingTop: 200
                }}>
                <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundImage: `url(${bannerHotHeader2})`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}></div>
                <div className="container row" style={{ height: '100%', margin: '0 auto', zIndex: 1000000 }} >
                    <div className="col-lg-5 col-md-12 col-sm-12 pt-50" >
                        <div className="title-section mb-md-5">
                            <h1 className="animate__animated animate__fadeInLeft">Ch??o m???ng ?????n v???i VietSkin</h1>
                        </div>
                        <div className="title-section mb-4">
                            <p className="animate__animated animate__fadeInLeft">?????i ng?? b??c s?? VietSkin l?? nh???ng b??c s?? chuy??n khoa
                                Ph?? gi??o s??, Ti???n s??, Th???c s?? v???i tr??n 30 n??m kinh nghi???m. ?????u ??ang c??ng t??c v?? gi???ng d???y t???i c??c b???nh vi???n uy t??n h??ng ?????u Vi???t Nam.</p>
                        </div>
                        <div className="customBtn mt-70 animate__animated animate__slow animate__bounce " >

                            <Link className="" to="/doctor" style={{ textDecoration: 'none', color: "black" }}>?????t l???ch kh??m <i className="fa fa-arrow-right ml-3"></i></Link>

                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 animate__animated animate__fadeInRight hide">
                        <img src={bacsy} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderAreaFix
