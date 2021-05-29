
import React from 'react';
import tuvan from "../asset/tuvan.svg";

import '../css/style.css'


const Slider2 = () => {
    return (
        <>
            <main
                style={{ paddingBottom: 100 }}>
                <div className="row container" style={{ height: '100%', margin: '0 auto' }}>
                    <div className="col-md-7 col-sm-12 pt-20 ">
                        <img src={tuvan} alt="" />
                    </div>
                    <div className="col-md-5 col-sm-12 pt-100" style={{justifyContent:'center',alignItems:'center'}}>
                        <div className="title-section mb-md-5">
                            <h3>Trả phí 1 lần</h3>
                        </div>
                        <div className="title-section mb-4">
                            <h3>Tư vấn tận tình</h3>
                        </div>
                        <div className="title-section mt-70">
                            <p>VietSkin - Tư vấn về da không lo đi xa</p>
                        </div>
                    </div>
                </div>

            </main>

        </>
    )
}

export default Slider2
