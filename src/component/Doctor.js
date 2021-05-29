import React from 'react'
import PaginationTable from "../component/Pagination/PaginationTable";
import '../css/style.css'
import quyet from "../asset/quyet.jpg";
import { changeStateChat } from '../store/actions/chat';
import { useDispatch } from 'react-redux';
const Doctor = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="container mb-30">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="row dt_border">
                            <div className="col-md-4 col-sm-4 col-xs-12 customImg" >
                                <img src={quyet} alt="" />
                            </div>
                            <div className="col-md-8 col-sm-8 col-xs-12 customInfo">
                                <div className="title-section">
                                    <p>PGS.TS.BS Trần Đăng Quyết</p>
                                </div>
                                <div className="workplace">
                                    <p>Chuyên ngành: Bệnh trẻ em, Lông tóc</p>
                                </div>
                                <div className="">
                                    <p>40 năm kinh nghiệm</p>
                                </div>
                                <div className="customBtn">
                                    <button onClick={() => dispatch(changeStateChat())}>Liên hệ với bác sỹ</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-sm-12 col-xs-12" >
                        <div className="row dt_border">
                            <div className="col-md-4 col-sm-4 col-xs-12 customImg" >
                                <img src={quyet} alt="" />
                            </div>
                            <div className="col-md-8 col-sm-8 col-xs-12 customInfo">
                                <div className="title-section">
                                    <p>PGS.TS.BS Trần Đăng Quyết</p>
                                </div>
                                <div className="workplace">
                                    <p>Chuyên ngành: Bệnh trẻ em, Lông tóccccccccccccasdasdasfasdfasf</p>
                                </div>
                                <div className="">
                                    <p>40 năm kinh nghiệm</p>
                                </div>
                                <div className="customBtn">
                                    <button>Liên hệ với bác sỹ</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Doctor
