import React from 'react'
import '../css/style.css'
import { Link } from "react-router-dom";
import imgSignUp from "../asset/imgSignUp.png";

const Footer = () => {
    return (
        <>
            {/* <div className="ps-subscribe">
                <div className="ps-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 ">
                            <h3><i className="fa fa-envelope"></i>Đăng ký tài khoản</h3>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12 col-xs-12 ">
                            <form className="ps-subscribe__form">
                                <input className="form-control" type="text" placeholder="" />
                                <button><Link to="/signUp" style={{textDecoration:'none',color:'#fff'}}>Đăng ký ngay</Link></button>
                            </form>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 ">
                            <p>...tặng <span> 200.000 </span> cho lần đầu tiên mua sắm.</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="ps-footer" style={{backgroundColor:'#242a61'}}>
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
                                        <p>Phone: 036.678.2288</p>
                                        
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
                                        <p>Phone: 032.142.2512</p>
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
                                            <li><a href="#">Các sản phẩm bán chạy</a></li>
                                            <li><a href="#">Giới thiệu về chúng tôi</a></li>
                                            <li><a href="#">Chính sách đảm bảo</a></li>
                                            <li><a href="#">Vận chuyển nhanh chóng</a></li>
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
                                            <li><a href="#">Tự chuẩn đoán</a></li>
                                            <li><a href="#">Tin tức</a></li>
                                            <li><a href="#">Bệnh da liễu</a></li>
                                            <li><a href="#">Chăm sóc da</a></li>
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
                                    <li><a style={{color:'#fff'}} href="https://www.facebook.com/bacsidalieuvietskin/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a style={{color:'#fff'}} href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a style={{color:'#fff'}} href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a style={{color:'#fff'}} href="#"><i className="fa fa-instagram"></i></a></li>
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
