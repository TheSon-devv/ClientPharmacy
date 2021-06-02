import React from 'react'
import '../css/style.css'
import { Link } from "react-router-dom";
import imgSignUp from "../asset/imgSignUp.png";
import bannerFooter from "../asset/bannerFooter.svg";

const Footer = () => {
    return (
        <>
            <div style={{ height: 200, backgroundSize: '100% auto', backgroundImage: `url(${bannerFooter})`, backgroundPosition: '0 0', backgroundRepeat: 'no-repeat' }}>

            </div>

            <div className="ps-footer" style={{ backgroundColor: '#242a61' }}>
                <div className="ps-footer__content">
                    <div className="ps-container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                                <aside className="ps-widget--footer ps-widget--info">
                                    <header><a className="ps-logo" href="index.html"><img src="images/logo-white.png" alt="" /></a>
                                        <h3 className="ps-widget__title">Địa chỉ 1 </h3>
                                    </header>
                                    <footer>
                                        <p><strong>Số 3 Ngõ 152 P. Phương Liệt, Phương Liệt, Thanh Xuân, Hà Nội</strong></p>
                                        <p>Email: <a href='mailto:support@store.com'>vietskin@gmail.com</a></p>
                                        <p>Điện thoại: 036.678.2288</p>

                                    </footer>
                                </aside>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                                <aside className="ps-widget--footer ps-widget--info second">
                                    <header>
                                        <h3 className="ps-widget__title">Địa chỉ 2</h3>
                                    </header>
                                    <footer>
                                        <p><strong>235 Hoàng Quốc Việt, Hà Nội</strong></p>
                                        <p>Email: <a href='mailto:support@store.com'>luudinhkien@gmail.com</a></p>
                                        <p>Điện thoại: 032.142.2512</p>
                                    </footer>
                                </aside>
                            </div>
                            {/* <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                                <aside className="ps-widget--footer ps-widget--link">
                                    <header>
                                        <h3 className="ps-widget__title">Find Our store</h3>
                                    </header>
                                    <footer>
                                        <ul className="ps-list--link">
                                            <li><a href="#">Coupon Code</a></li>
                                            <li><a href="#">SignUp For Email</a></li>
                                            <li><a href="#">Site Feedback</a></li>
                                            <li><a href="#">Careers</a></li>
                                        </ul>
                                    </footer>
                                </aside>
                            </div> */}
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <aside className="ps-widget--footer ps-widget--link">
                                    <header>
                                        <h3 className="ps-widget__title">Vể VietSkin</h3>
                                    </header>
                                    <footer>
                                        <ul className="ps-list--line">
                                            <li><Link to="/productList" style={{ textDecoration: 'none' }}>Các sản phẩm bán chạy</Link></li>
                                            <li><Link to="/productList" style={{ textDecoration: 'none' }}>Giới thiệu về chúng tôi</Link></li>
                                            <li><Link to="/productList" style={{ textDecoration: 'none' }}>Chính sách đảm bảo</Link></li>
                                            <li><Link to="/productList" style={{ textDecoration: 'none' }}>Vận chuyển nhanh chóng</Link></li>
                                        </ul>
                                    </footer>
                                </aside>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <aside className="ps-widget--footer ps-widget--link">
                                    <header>
                                        <h3 className="ps-widget__title">Nổi bật</h3>
                                    </header>
                                    <footer>
                                        <ul className="ps-list--line">
                                            <li><Link to="/productList" style={{ textDecoration: 'none' }}>Tự chuẩn đoán</Link></li>
                                            <li><Link to="/blog" style={{ textDecoration: 'none' }}>Tin tức</Link></li>
                                            <li><Link to="/productList" style={{ textDecoration: 'none' }}>Bác sỹ</Link></li>
                                            <li><Link to="/contact" style={{ textDecoration: 'none' }}>Liên hệ</Link></li>
                                        </ul>
                                    </footer>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ps-footer__copyright">
                    <div className="ps-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <p>&copy; <a href="#">VIETSKIN</a>, Inc. Tất cả đều được cho phép. Thiết kế bởi<a href="#"> Kien </a></p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <ul className="ps-social">
                                    <li style={{ color: '#fff' }}>Liên hệ với chúng tôi </li>
                                    <li><a style={{ color: '#fff' }} href="https://www.facebook.com/bacsidalieuvietskin/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
