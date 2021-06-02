
import React from 'react';
import { Carousel } from 'react-bootstrap';
import well from "../asset/not-feeling-well.svg";
import { Link } from "react-router-dom";
import '../css/style.css'


const Slider5 = () => {
    return (
        <>
            <main
                style={{ paddingBottom: 100}}>
                <div className="row" style={{position:'relative',marginLeft:'30px',marginRight:'-20px',paddingBottom:200}}>
                    <div className="col-md-5 col-sm-12 " style={{marginTop:400}}>
                        <div className="title-section mb-md-5">
                            <h1 className="animate__animated animate__fadeInLeft">Bạn cảm thấy không khỏe ?</h1>
                            <h1 className="animate__animated animate__fadeInLeft">Hãy để VietSkin chăm sóc cho bạn !</h1>
                        </div>
                        <div className="title-section mb-4">
                            <p className="animate__animated animate__fadeInLeft">Tìm hiểu thêm về các dịch vụ chăm sóc sức khỏe của chúng tôi, từ cảm mạo thông thường đến các bệnh mạn tính - các bác sĩ VietSkin thân thiện sẽ tận tình tư vấn, chăm sóc bạn và gia đình.</p>
                        </div>
                        
                    </div>
                    <div className="col-md-7 col-sm-12 pt-20 " style={{position:'absolute',top:0,right:0}}>
                        <img src={well} alt="" style={{height:'1000px'}}/>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Slider5
