import React from 'react'
import '../css/style.css'
// import '../css/plugins/revolution/css/navigation.css'
// import '../css/plugins/owl-carousel/assets/owl.carousel.css'
// import '../css/plugins/slick/slick/slick.css'
// import '../css/plugins/Magnific-Popup/dist/magnific-popup.css'
// import '../css/plugins/revolution/css/settings.css'
// import '../css/plugins/revolution/css/layers.css'
import { Link } from "react-router-dom";
import Logo from "../asset/logo-app.png";

const HeaderArea = () => {
    return (
        <div >
            <div class="header--sidebar"></div>
            <header class="header">
                <nav class="navigation">
                    <div class="container-fluid row">
                        <div class="navigation__column left">
                            <div class="header__logo ml-5">
                                <a class="ps-logo" href="index.html"><img src={Logo} alt="" style={{ width: '65px', height: '60px' }} /></a>
                                <span style={{ color: 'blue', fontSize: 20, fontWeight: '600', marginLeft: 10 }}>Viet<span style={{ color: 'red' }}>Skin</span></span>
                            </div>
                        </div>
                        <div class="navigation__column center">
                            <ul class="main-menu menu">
                                <li class="menu-item menu-item-has-children dropdown"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                                    {/* <ul class="sub-menu">
                                        <li class="menu-item"><a href="index.html">Homepage #1</a></li>
                                        <li class="menu-item"><a href="#">Homepage #2</a></li>
                                        <li class="menu-item"><a href="#">Homepage #3</a></li>
                                    </ul> */}
                                </li>
                                <li class="menu-item menu-item-has-children has-mega-menu"><a href="">Men</a>
                                    <div class="mega-menu">
                                        <div class="mega-wrap row px-2">
                                            <div class="mega-column">
                                                <ul class="mega-item mega-features">
                                                    <li><Link to="/signIn">NEW RELEASES</Link></li>
                                                    <li><a href="product-listing.html">FEATURES SHOES</a></li>
                                                    <li><a href="product-listing.html">BEST SELLERS</a></li>
                                                    <li><a href="product-listing.html">NOW TRENDING</a></li>
                                                    <li><a href="product-listing.html">SUMMER ESSENTIALS</a></li>
                                                    <li><a href="product-listing.html">MOTHER'S DAY COLLECTION</a></li>
                                                    <li><a href="product-listing.html">FAN GEAR</a></li>
                                                </ul>
                                            </div>



                                            <div class="mega-column">
                                                <h4 class="mega-heading">BRAND</h4>
                                                <ul class="mega-item">
                                                    <li><Link to="/signIn">NIKE</Link></li>
                                                    <li><a href="product-listing.html">Adidas</a></li>
                                                    <li><a href="product-listing.html">Dior</a></li>
                                                    <li><a href="product-listing.html">B&G</a></li>
                                                </ul>
                                            </div>

                                            <div class="mega-column">
                                                <h4 class="mega-heading">BRAND</h4>
                                                <ul class="mega-item">
                                                    <li><a href="product-listing.html">NIKE</a></li>
                                                    <li><a href="product-listing.html">Adidas</a></li>
                                                    <li><a href="product-listing.html">Dior</a></li>
                                                    <li><a href="product-listing.html">B&G</a></li>
                                                </ul>
                                            </div>
                                            <div class="mega-column">
                                                <h4 class="mega-heading">BRAND</h4>
                                                <ul class="mega-item">
                                                    <li><a href="product-listing.html">NIKE</a></li>
                                                    <li><a href="product-listing.html">Adidas</a></li>
                                                    <li><a href="product-listing.html">Dior</a></li>
                                                    <li><a href="product-listing.html">B&G</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="navigation__column right">

                            {
                                localStorage.getItem('token') !== null ? (
                                    <div >
                                        <form class="ps-search--header" action="do_action" method="post">
                                            <input class="form-control" type="text" placeholder="Search Product…" />
                                            <button><i class="ps-icon-search"></i></button>
                                        </form>
                                        <div class="ps-cart"><a class="ps-cart__toggle" href="#"><span><i>20</i></span><i class="ps-icon-shopping-cart"></i></a>
                                            <div class="ps-cart__listing">
                                                <div class="ps-cart__content">
                                                    <div class="ps-cart-item"><a class="ps-cart-item__close" href="#"></a>
                                                        <div class="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src="images/cart-preview/1.jpg" alt="" /></div>
                                                        <div class="ps-cart-item__content"><a class="ps-cart-item__title" href="product-detail.html">Amazin’ Glazin’</a>
                                                            <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                                                        </div>
                                                    </div>
                                                    <div class="ps-cart-item"><a class="ps-cart-item__close" href="#"></a>
                                                        <div class="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src="images/cart-preview/2.jpg" alt="" /></div>
                                                        <div class="ps-cart-item__content"><a class="ps-cart-item__title" href="product-detail.html">The Crusty Croissant</a>
                                                            <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                                                        </div>
                                                    </div>
                                                    <div class="ps-cart-item"><a class="ps-cart-item__close" href="#"></a>
                                                        <div class="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src="images/cart-preview/3.jpg" alt="" /></div>
                                                        <div class="ps-cart-item__content"><a class="ps-cart-item__title" href="product-detail.html">The Rolling Pin</a>
                                                            <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ps-cart__total">
                                                    <p>Number of items:<span>36</span></p>
                                                    <p>Item Total:<span>£528.00</span></p>
                                                </div>
                                                <div class="ps-cart__footer"><Link class="ps-btn" to="/cart" style={{ textDecoration: 'none' }}>Check out<i class="ps-icon-arrow-left"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                    :
                                    (
                                        <div class="ps-cart">
                                            <button class="btn btn-info"><Link to="/signIn" style={{ textDecoration: 'none', color: '#fff' }}>Đăng nhập</Link></button>
                                        </div>
                                    )
                            }
                            {/* <div class="menu-toggle"><span></span></div> */}
                        </div>
                    </div>
                </nav>
            </header>
            <div class="header-services mb-3">
                <div class="ps-services owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="7000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="false" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on">
                    <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
                    <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
                    <p class="ps-service"><i class="ps-icon-delivery"></i><strong>Free delivery</strong>: Get free standard delivery on every order with Sky Store</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderArea
