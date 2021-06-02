
import React from 'react';
import { Carousel } from 'react-bootstrap';
import bacsy from "../asset/bacsy.png";
import bacsy2 from "../asset/bacsy2.png";
import bacsy3 from "../asset/bacsy3.png";
import anh_nen1 from "../asset/anh_nen1.svg";
import anh_nen2 from "../asset/anh_nen2.svg";
import ship from "../asset/ship.svg";
import headphone from "../asset/headphone.svg";
import pharmacy from "../asset/pharmacy.svg";
import time from "../asset/time.svg";
import { Link } from "react-router-dom";
import '../css/style.css'


const Slider = () => {
    return (
        <>
            {/* <main
                style={{ paddingBottom: 100, backgroundImage: `url(${anh_nen1})`, backgroundPosition: '500px 0', backgroundRepeat: 'no-repeat' }}>
                <div className="row container" style={{ height: '100%', margin: '0 auto' }}>
                    <div className="col-md-5 col-sm-12 pt-50" >
                        <div className="title-section mb-md-5">
                            <h3 className="animate__animated animate__fadeInLeft">Đội ngũ bác sỹ da liễu giàu kinh nghiệm</h3>
                        </div>
                        <div className="title-section mb-4">
                            <p className="animate__animated animate__fadeInLeft">Đội ngũ bác sĩ VietSkin là những bác sĩ chuyên khoa
                        Phó giáo sư, Tiến sĩ, Thạc sĩ với trên 30 năm kinh nghiệm. Đều đang công tác và giảng dạy tại các bệnh viện uy tín hàng đầu Việt Nam.</p>
                        </div>
                        <div className="customBtn mt-70">
                            <button className="animate__animated animate__fadeInUp">
                                <Link to="/doctor" style={{textDecoration:'none',color:"black"}}>Xem chi tiết <i className="fa fa-arrow-right ml-3"></i></Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 pt-20 animate__animated animate__fadeInRight">
                        <img src={bacsy} alt="" />
                    </div>
                </div>

            </main> */}
            <main style={{marginBottom:100,paddingBottom: 60, backgroundImage: `url(${anh_nen2})`, backgroundPosition: '200px 0', backgroundRepeat: 'no-repeat' }}>
                <div className="row container" style={{ height: '100%', margin: '0 auto', marginTop: 100 }}>
                    <div className="col-md-8 col-sm-12 pt-50" >
                        <div className="title-section mb-md-5">
                            <h3 className="animate__animated animate__fadeInRight" style={{ color: "rgb(12, 84, 117)" }}>Tại sao nên chọn chúng tôi ?</h3>
                        </div>
                        <div className="title-section mb-4">
                            <p className="animate__animated animate__fadeInRight">VietSkin là một nền tảng kết nối bệnh nhân với các bác sĩ da liễu cho phép tư vấn da liễu từ xa đầu tiên và duy nhất tại Việt Nam với những ưu điểm:</p>
                        </div>
                        <div className="row mt-70">
                            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="customShow col-md-5 col-sm-10">
                                    <img src={time} alt="" />
                                Nhanh chóng, thuận tiện, không mất thời gian chờ đợi
                                </div>
                                <div className="col-md-1 col-sm-10"></div>
                                <div className="customShow col-md-5 col-sm-12">
                                    <img src={headphone} alt="" />
                                Bác sĩ chuyên khoa uy tín trên 30 năm kinh nghiệm
                                </div>
                            </div>
                            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="customShow col-md-5 col-sm-10">
                                    <img src={pharmacy} alt="" />
                                Các bước chuẩn đoán và điều trị kĩ lưỡng
                                </div>
                                <div className="col-md-1 col-sm-10"></div>
                                <div className="customShow col-md-5 col-sm-10">
                                    <img src={ship} alt="" />
                                Hỗ trợ mua thuốc gửi về tận nhà
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 pt-20 animate__animated animate__fadeInLeft" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img className="" src={bacsy2} alt="" height="500" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Slider
