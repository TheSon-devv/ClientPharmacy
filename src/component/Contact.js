import React from 'react'

const Contact = () => {
    return (
        <div>
            
            <div className="ps-container py-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="ps-section__header mb-50">
                            <h2 className="ps-section__title" data-mask="Contact">- Thông tin liên hệ</h2>
                            <form className="ps-contact__form" action="do_action" method="post">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                        <div className="form-group">
                                            <label>Tên <sub>*</sub></label>
                                            <input className="form-control" type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                        <div className="form-group">
                                            <label>Email <sub>*</sub></label>
                                            <input className="form-control" type="email" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                        <div className="form-group mb-25">
                                            <label>Nội dung <sub>*</sub></label>
                                            <textarea className="form-control" rows="6"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button className="ps-btn">Gửi tin nhắn<i className="ps-icon-next"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="ps-section__content">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                    <div className="ps-contact__block" data-mh="contact-block">
                                        <header>
                                            <h3>Hà Nội</h3>
                                        </header>
                                        <footer>
                                            <p><i className="fa fa-map-marker"></i> Số 3 Ngõ 152 P. Phương Liệt, Phương Liệt, Thanh Xuân, Hà Nội</p>
                                            <p><i className="fa fa-envelope-o"></i><a href="mailto@supportShoes@shoes.net">vietskin@gmail.com</a></p>
                                            <p><i className="fa fa-phone"></i> 036.678.2288</p>
                                        </footer>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                    <div className="ps-contact__block" data-mh="contact-block">
                                        <header>
                                            <h3>EPU</h3>
                                        </header>
                                        <footer>
                                            <p><i className="fa fa-map-marker"></i> 235 Hoàng Quốc Việt - Hà Nội</p>
                                            <p><i className="fa fa-envelope-o"></i><a href="mailto@supportShoes@shoes.net">thesonk7@gmail.com</a></p>
                                            <p><i className="fa fa-phone"></i> 032.142.2512</p>
                                        </footer>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
