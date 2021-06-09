import React, { useEffect, useState } from 'react'
import PaginationTable from "../component/Pagination/PaginationTable";
import '../css/style.css'
import quyet from "../asset/quyet.jpg";
import { changeStateChat } from '../store/actions/chat';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
const Doctor = () => {
    const dispatch = useDispatch();
    const id = useParams();
    const [dataDetail, setDataDetail] = useState([])
    useEffect(() => {
        axios.get(`https://vietskin.herokuapp.com/doctor/${id.id}`)
            .then(res => {
                console.log(res.data)
                setDataDetail(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            {
                dataDetail.map(item => {
                    return (
                        <div className="container mt-100 mb-100" key={item._id}>
                            <div className="detailDoctorBox">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4 col-xs-12 customImgDetail" >
                                        <img src={item.doctorImage} alt="" />
                                        <div className="info">
                                            <div className="title-section" >
                                                <p style={{ color: "rgb(0, 201, 0)", fontWeight: 'bold' }}>{item.nameDoctor}</p>
                                            </div>
                                            <div style={{ margin: '10px 0' }}>
                                                <i className="fa fa-book" style={{ marginRight: '10px' }}></i>
                                                <span>Gần {item.experienceYear} năm kinh nghiệm</span>
                                            </div>
                                            <div className="">
                                                <i className="fa fa-briefcase" style={{ marginRight: '10px' }}></i>{item.education}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-sm-8 col-xs-12 customInfo">
                                        <div style={{ marginBottom: '10px' }}>
                                            <div className="detailTitle">
                                                Kinh nghiệm
                                            </div>
                                            <div style={{width:'100%',overflowX:'hidden'}}>
                                                <pre style={{fontFamily:'Montserrat',fontSize:16}}>{item.experience}</pre>
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: '10px' }}>
                                            <div className="detailTitle">
                                                Bằng cấp
                                            </div>
                                            <div style={{width:'100%',overflowX:'hidden'}}>
                                                <pre style={{fontFamily:'Montserrat',fontSize:16}}>{item.details}</pre>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="detailTitle">
                                                Chuyên ngành
                                            </div>
                                            <div>
                                                {item.workplace}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    )
                })
            }
        </>
    )
}

export default Doctor
