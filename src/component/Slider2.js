
import React from 'react';
import tuvan from "../asset/tuvan.svg";
import bannerHot2 from "../asset/bannerHot2.svg";
import anh_nen1 from "../asset/anh_nen1.svg";

import '../css/style.css'


const Slider2 = () => {
    return (
        <>
            <main style={{marginBottom:80}}>
                <div className="row container" style={{ height: '100%', margin: '0 auto' }}>
                    <div className="col-md-6 col-sm-12 pt-100" style={{paddingLeft:100 }}>
                        <div className="title-section mb-md-5">
                            <h3>Đội ngũ bác sỹ giỏi</h3>
                        </div>
                        <div className="title-section mb-4">
                            <h3>Tư vấn tận tình</h3>
                        </div>
                        <div className="title-section mt-70">
                            <p>VietSkin - Tư vấn về da không lo đi xa</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 pt-20 ">
                        <img src={tuvan} alt="" />
                    </div>
                </div>

            </main>

        </>
    )
}

export default Slider2
