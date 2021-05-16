import React from 'react'
import '../css/style.css'
import thuoc from "../asset/thuoc.jpg";
import banner1 from "../asset/banner1.jpg";
import banner2 from "../asset/banner2.jpg";
import { Link } from "react-router-dom";

const CategoryProduct = () => {
    return (
        <main class="ps-main">
            <div class="ps-section--features-product ps-section masonry-root pt-100 pb-100">
                <div class="ps-container">
                    <div class="ps-section__header mb-50">
                        <h3 class="ps-section__title" data-mask="features">- SẢN PHẨM NỔI BẬT</h3>
                        <div >
                            <ul class="ps-masonry__filter">
                                <li class="current"><a href="#" data-filter="*">All <sup>8</sup></a></li>
                                <li><a href="#" data-filter=".nike">Nike <sup>1</sup></a></li>
                                <li><a href="#" data-filter=".adidas">Adidas <sup>1</sup></a></li>
                                <li><a href="#" data-filter=".men">Men <sup>1</sup></a></li>
                                <li><a href="#" data-filter=".women">Women <sup>1</sup></a></li>
                                <li><a href="#" data-filter=".kids">Kids <sup>4</sup></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ps-section__content pb-50">
                        <div class="masonry-wrapper">
                            <div class="ps-masonry row">
                                {/* <div class="grid-sizer"></div> */}

                                <div class="grid-item kids col-md-3 col-xs-1">
                                    <div class="grid-item__content-wrapper">
                                        <div class="ps-shoe mb-30">
                                            <div class="ps-shoe__thumbnail">
                                                <div class="ps-badge"><span>New</span></div>
                                                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src={thuoc} alt="" /><Link class="ps-shoe__overlay" to="/detailProduct"></Link>
                                            </div>
                                            <div class="ps-shoe__content">
                                                <div class="ps-shoe__variants">
                                                    <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                                                    <select class="ps-rating ps-shoe__rating">
                                                        <option value="1">1</option>
                                                        <option value="1">2</option>
                                                        <option value="1">3</option>
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                    </select>
                                                </div>
                                                <div class="ps-shoe__detail"><a class="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                                                    <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price">
                                                        <del>£220</del> £ 120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid-item kids col-md-3 col-xs-1">
                                    <div class="grid-item__content-wrapper">
                                        <div class="ps-shoe mb-30">
                                            <div class="ps-shoe__thumbnail">
                                                <div class="ps-badge"><span>New</span></div>
                                                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src={thuoc} alt="" /><a class="ps-shoe__overlay" href="product-detail.html"></a>
                                            </div>
                                            <div class="ps-shoe__content">
                                                <div class="ps-shoe__variants">
                                                    <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                                                    <select class="ps-rating ps-shoe__rating">
                                                        <option value="1">1</option>
                                                        <option value="1">2</option>
                                                        <option value="1">3</option>
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                    </select>
                                                </div>
                                                <div class="ps-shoe__detail"><a class="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                                                    <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price">
                                                        <del>£220</del> £ 120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid-item kids col-md-3 col-xs-1">
                                    <div class="grid-item__content-wrapper">
                                        <div class="ps-shoe mb-30">
                                            <div class="ps-shoe__thumbnail">
                                                <div class="ps-badge"><span>New</span></div>
                                                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src={thuoc} alt="" /><a class="ps-shoe__overlay" href="product-detail.html"></a>
                                            </div>
                                            <div class="ps-shoe__content">
                                                <div class="ps-shoe__variants">
                                                    <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                                                    <select class="ps-rating ps-shoe__rating">
                                                        <option value="1">1</option>
                                                        <option value="1">2</option>
                                                        <option value="1">3</option>
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                    </select>
                                                </div>
                                                <div class="ps-shoe__detail"><a class="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                                                    <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price">
                                                        <del>£220</del> £ 120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid-item kids col-md-3 col-xs-1">
                                    <div class="grid-item__content-wrapper">
                                        <div class="ps-shoe mb-30">
                                            <div class="ps-shoe__thumbnail">
                                                <div class="ps-badge"><span>New</span></div>
                                                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src={thuoc} alt="" /><a class="ps-shoe__overlay" href="product-detail.html"></a>
                                            </div>
                                            <div class="ps-shoe__content">
                                                <div class="ps-shoe__variants">
                                                    <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                                                    <select class="ps-rating ps-shoe__rating">
                                                        <option value="1">1</option>
                                                        <option value="1">2</option>
                                                        <option value="1">3</option>
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                    </select>
                                                </div>
                                                <div class="ps-shoe__detail"><a class="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                                                    <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price">
                                                        <del>£220</del> £ 120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid-item kids col-md-3 col-xs-1">
                                    <div class="grid-item__content-wrapper">
                                        <div class="ps-shoe mb-30">
                                            <div class="ps-shoe__thumbnail">
                                                <div class="ps-badge"><span>New</span></div>
                                                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src={thuoc} alt="" /><a class="ps-shoe__overlay" href="product-detail.html"></a>
                                            </div>
                                            <div class="ps-shoe__content">
                                                <div class="ps-shoe__variants">
                                                    <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                                                    <select class="ps-rating ps-shoe__rating">
                                                        <option value="1">1</option>
                                                        <option value="1">2</option>
                                                        <option value="1">3</option>
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                    </select>
                                                </div>
                                                <div class="ps-shoe__detail"><a class="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                                                    <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price">
                                                        <del>£220</del> £ 120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid-item kids col-md-3 col-xs-1">
                                    <div class="grid-item__content-wrapper">
                                        <div class="ps-shoe mb-30">
                                            <div class="ps-shoe__thumbnail">
                                                <div class="ps-badge"><span>New</span></div>
                                                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src={thuoc} alt="" /><a class="ps-shoe__overlay" href="product-detail.html"></a>
                                            </div>
                                            <div class="ps-shoe__content">
                                                <div class="ps-shoe__variants">
                                                    <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                                                    <select class="ps-rating ps-shoe__rating">
                                                        <option value="1">1</option>
                                                        <option value="1">2</option>
                                                        <option value="1">3</option>
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                    </select>
                                                </div>
                                                <div class="ps-shoe__detail"><a class="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                                                    <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price">
                                                        <del>£220</del> £ 120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid-item kids col-md-3 col-xs-1">
                                    <div class="grid-item__content-wrapper">
                                        <div class="ps-shoe mb-30">
                                            <div class="ps-shoe__thumbnail">
                                                <div class="ps-badge"><span>New</span></div>
                                                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src={thuoc} alt="" /><a class="ps-shoe__overlay" href="product-detail.html"></a>
                                            </div>
                                            <div class="ps-shoe__content">
                                                <div class="ps-shoe__variants">
                                                    <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                                                    <select class="ps-rating ps-shoe__rating">
                                                        <option value="1">1</option>
                                                        <option value="1">2</option>
                                                        <option value="1">3</option>
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                    </select>
                                                </div>
                                                <div class="ps-shoe__detail"><a class="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                                                    <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price">
                                                        <del>£220</del> £ 120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid-item kids col-md-3 col-xs-1">
                                    <div class="grid-item__content-wrapper">
                                        <div class="ps-shoe mb-30">
                                            <div class="ps-shoe__thumbnail">
                                                <div class="ps-badge"><span>New</span></div>
                                                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src={thuoc} alt="" /><a class="ps-shoe__overlay" href="product-detail.html"></a>
                                            </div>
                                            <div class="ps-shoe__content">
                                                <div class="ps-shoe__variants">
                                                    <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                                                    <select class="ps-rating ps-shoe__rating">
                                                        <option value="1">1</option>
                                                        <option value="1">2</option>
                                                        <option value="1">3</option>
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                    </select>
                                                </div>
                                                <div class="ps-shoe__detail"><a class="ps-shoe__name" href="#">Air Jordan 7 Retro</a>
                                                    <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price">
                                                        <del>£220</del> £ 120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ps-section--offer">
                <div class="ps-column"><a class="ps-offer" href="product-listing.html"><img src={banner1} alt="" /></a></div>
                <div class="ps-column"><a class="ps-offer" href="product-listing.html"><img src={banner2} alt="" /></a></div>
            </div>
            <div class="ps-section ps-section--top-sales ps-owl-root pt-80 pb-80">
                <div class="ps-container">
                    <div class="ps-section__header mb-50">
                        <div class="row">
                            <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                                <h3 class="ps-section__title" data-mask="BEST SALE">- Top Sales</h3>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                                <div class="ps-owl-actions"><a class="ps-prev" href="#"><i class="ps-icon-arrow-right"></i>Prev</a><a class="ps-next" href="#">Next<i class="ps-icon-arrow-left"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="ps-section__content">
                        <div class="ps-owl--colection owl-slider row">
                            <div class="ps-shoes--carousel col-lg-3 col-md-3 ">
                                <div class="ps-shoe">
                                    <div class="ps-shoe__thumbnail">
                                        <div class="ps-badge"><span>New</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src={thuoc} alt="" /><a class="ps-shoe__overlay" href="product-detail.html"></a>
                                    </div>
                                    <div class="ps-shoe__content">
                                        <div class="ps-shoe__variants">
                                            <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                                            <select class="ps-rating ps-shoe__rating">
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="2">5</option>
                                            </select>
                                        </div>
                                        <div class="ps-shoe__detail"><a class="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                                            <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price"> £ 120</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ps-shoes--carousel col-lg-3 col-md-3 ">
                                <div class="ps-shoe">
                                    <div class="ps-shoe__thumbnail">
                                        <div class="ps-badge"><span>New</span></div>
                                        <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src={thuoc} alt="" /><a class="ps-shoe__overlay" href="product-detail.html"></a>
                                    </div>
                                    <div class="ps-shoe__content">
                                        <div class="ps-shoe__variants">
                                            <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                                            <select class="ps-rating ps-shoe__rating">
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="2">5</option>
                                            </select>
                                        </div>
                                        <div class="ps-shoe__detail"><a class="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                                            <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price">
                                                <del>£220</del> £ 120</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ps-shoes--carousel col-lg-3 col-md-3 ">
                                <div class="ps-shoe">
                                    <div class="ps-shoe__thumbnail">
                                        <div class="ps-badge"><span>New</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src={thuoc} alt="" /><a class="ps-shoe__overlay" href="product-detail.html"></a>
                                    </div>
                                    <div class="ps-shoe__content">
                                        <div class="ps-shoe__variants">
                                            <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                                            <select class="ps-rating ps-shoe__rating">
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="2">5</option>
                                            </select>
                                        </div>
                                        <div class="ps-shoe__detail"><a class="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                                            <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price"> £ 120</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="ps-shoes--carousel col-lg-3 col-md-3 ">
                                <div class="ps-shoe">
                                    <div class="ps-shoe__thumbnail">
                                        <div class="ps-badge"><span>New</span></div><a class="ps-shoe__favorite" href="#"><i class="ps-icon-heart"></i></a><img src={thuoc} alt="" /><a class="ps-shoe__overlay" href="product-detail.html"></a>
                                    </div>
                                    <div class="ps-shoe__content">
                                        <div class="ps-shoe__variants">
                                            <div class="ps-shoe__variant normal"><img src="images/shoe/2.jpg" alt="" /><img src="images/shoe/3.jpg" alt="" /><img src="images/shoe/4.jpg" alt="" /><img src="images/shoe/5.jpg" alt="" /></div>
                                            <select class="ps-rating ps-shoe__rating">
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="2">5</option>
                                            </select>
                                        </div>
                                        <div class="ps-shoe__detail"><a class="ps-shoe__name" href="product-detai.html">Air Jordan 7 Retro</a>
                                            <p class="ps-shoe__categories"><a href="#">Men shoes</a>,<a href="#"> Nike</a>,<a href="#"> Jordan</a></p><span class="ps-shoe__price"> £ 120</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CategoryProduct
