
import React from 'react';
import banner2 from "../asset/certified-image@3x.png";
import freeShip from "../asset/freeShip.png";
import delivery from "../asset/delivery-image.png";

import '../css/style.css'


const Slider3 = () => {
    return (
        <>
            <main
                style={{ marginBottom: 60 }} >
                <div className="container">

                    <div className="row mt-60">
                        <div className="col-md-6 col-sm-12">
                            <img src={delivery} alt="" />
                        </div>
                        <div className="col-md-6 col-sm-12 sliderRight" >
                            <div className="imgFreeShip">
                                <img src={freeShip} alt="" width="100" />
                            </div>
                            <div className="titleBannerRight">
                                <h5 style={{ color: '#fff' }}>Giao hàng miễn phí</h5>
                                <div style={{ padding: '10px 10px 10px 0' }}>
                                    <p style={{ textAlign: 'justify', color: '#fff', lineHeight: '25px' }}>Dành cho tất cả đơn hàng khi thanh toán qua PayPal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>

        </>
    )
}

export default Slider3
