
import React from 'react';
import banner2 from "../asset/certified-image@3x.png";

import '../css/style.css'


const Slider3 = () => {
    return (
        <>
            <main
                style={{ paddingBottom: 100}} >
                <div className="container">
                    <div className="title-section">
                        <h5>Cùng khám phá và trải nghiệm</h5>
                        <h3>Nhà thuốc Online VietSkin</h3>
                    </div>
                    <div className="row mt-60">
                        <div className="col-md-6 col-sm-12 sliderLeft ">
                            <div className="titleBanner">
                                <h5 style={{ color: '#eabb56' }}>Sự An Tâm Của Bạn Là Kim Chỉ Nam Của VietSkin</h5>
                                <div style={{ padding: '10px 10px 10px 0' }}>
                                    <p style={{ textAlign: 'justify', color: '#fff', lineHeight: '25px' }}>Nhà thuốc VietSkin tập trung mang đến những giá trị thật cho mỗi gia đình. Chúng tôi đảm bảo 100% thuốc chính hãng, được kiểm duyệt bởi Bộ Y Tế, và có hạn sử dụng xa. Trước khi đến tay bạn, các sản phẩm sẽ được kiểm tra và đóng gói bởi các dược sĩ có kinh nghiệm.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src={banner2} alt="" />
                        </div>
                    </div>
                </div>


            </main>

        </>
    )
}

export default Slider3
