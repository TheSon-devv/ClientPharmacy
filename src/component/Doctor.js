import React, { useEffect, useState } from 'react'
import PaginationTable from "../component/Pagination/PaginationTable";
import '../css/style.css'
import { changeStateChat } from '../store/actions/chat';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PopupOrderHealthy from "../UI/PopupOrderHealthy/PopupOrderHealthy";


const Doctor = (props) => {
    const dispatch = useDispatch();
    const [data, setData] = useState([])
    const [dataFilter, setDataFilter] = useState("")
    const [search, setDataSearch] = useState("")
    const [doctor, setDoctor] = useState("")
    const [show, setShow] = useState(false)
    const closeModal = () => setShow(false)


    useEffect(() => {
        axios.get('http://localhost:4000/doctor')
            .then(res => {
                console.log(res.data)
                setData(res.data.getDoctor)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {
                show ? (
                    <PopupOrderHealthy
                        open={show}
                        closeModal={closeModal}
                        doctor={doctor}
                    />
                ) : null
            }
            <div className="container mb-30 mt-30">
                <div className="search row">
                    <div style={{ marginRight: '20px' }}>Tìm kiếm bác sỹ theo : </div>
                    <select
                        value={dataFilter}
                        onChange={e => setDataFilter(e.target.value)}
                        className="selectControl"
                    >
                        <option value="">Trình độ</option>
                        <option value="PGS.TS.BS">PGS.TS.BS</option>
                        <option value="TS">TS</option>
                        <option value="ThS.BS">ThS.BS</option>
                        <option value="BS.CK1">BS.CK1</option>
                        <option value="BS.CK2">BS.CK2</option>
                        <option value="BS">BS</option>
                    </select>

                    <div className="ml-20">
                        <button className="btn btn-info" onClick={() => setDataSearch(dataFilter)}>Tìm kiếm</button>
                    </div>
                </div>
                <div className="row">
                    {
                        data.filter(val => {
                            if (search === "") {
                                return val
                            } else if (val.nameDoctor.toLowerCase().includes(search.toLowerCase())) {
                                return val
                            }
                        }).map(item => {
                            return (
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" key={item._id}>
                                    <div className="row dt_border">
                                        <div className="col-md-4 col-sm-4 col-xs-12 customImg" >
                                            <Link to={`/detailDoctor/${item._id}`} style={{ textDecoration: 'none', fontSize: 20 }}>
                                                <img src={item.doctorImage} alt="" />
                                            </Link>
                                        </div>
                                        <div className="col-md-8 col-sm-8 col-xs-12 customInfo">
                                            <div className="title-section">
                                                <Link to={`/detailDoctor/${item._id}`} style={{ textDecoration: 'none', fontSize: 20 }}>{item.nameDoctor}</Link>
                                            </div>
                                            <div className="workplace">
                                                <p>{item.workplace}</p>
                                            </div>
                                            <div className="">
                                                <p>Gần {item.experienceYear} năm kinh nghiệm</p>
                                            </div>
                                            <div className="customBtn">
                                                <button
                                                    onClick={() => {
                                                        setShow(true);
                                                        setDoctor(item._id)
                                                    }}
                                                >Đặt lịch khám ngay</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </>
    )
}

export default Doctor
