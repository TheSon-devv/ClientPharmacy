
import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerSlide6 from "../asset/bannerSlide6.svg";
import checkIcon from "../asset/checkIcon.svg";
import { Link } from "react-router-dom";
import '../css/style.css'


const Slider6 = () => {
    return (
        <>
            <main
                style={{ paddingBottom: 100, marginTop: 100 }}>
                <div className="row" style={{ position: 'relative', marginLeft: '-20px', marginRight: '30px' }}>
                    <div className="col-md-7 col-sm-12 pt-20" >
                        <img src={bannerSlide6} alt="" style={{ height: '1000px' }} />
                    </div>
                    <div className="col-md-5 col-sm-12 " style={{ marginLeft: '-100px', paddingTop: 200 }}>
                        <div className="title-section mb-md-5">
                            <h3>Những điều cần biết về COVID 19</h3>
                        </div>
                        <div className="title-section mb-4" style={{ width: '85%', display: 'flex', marginTop: 10 }}>
                            <img src={checkIcon} alt="" style={{ marginRight: 10 }} />
                            <div style={{ paddingTop: '10px' }}>
                                <p>Hiện nay không có khuyến cáo chính thức nào về việc sử dụng thuốc chống virus trong điều trị bệnh COVID-19.</p>
                            </div>
                        </div>
                        <div className="title-section mb-4" style={{ width: '85%', display: 'flex', marginTop: 10 }}>
                            <img src={checkIcon} alt="" style={{ marginRight: 10 }} />
                            <div style={{ paddingTop: '10px' }}>
                                <p>Thực hiện biện pháp 5K của Bộ Y Tế</p>
                            </div>
                        </div>
                        <div className="title-section mb-4" style={{ width: '85%', display: 'flex', marginTop: 10 }}>
                            <img src={checkIcon} alt="" style={{ marginRight: 10 }} />
                            <div style={{ paddingTop: '10px' }}>
                                <p>Các trường hợp bệnh nặng hoặc phức tạp của COVID-19 cần điều trị nâng đỡ, hướng đến việc làm giảm các biến chứng như suy hô hấp, sốc nhiễm trùng và suy đa tạng.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}

export default Slider6
