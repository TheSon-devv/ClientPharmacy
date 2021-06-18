import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// import 'react-toastify/dist/ReactToastify.css';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import classes from './PopupOrderHealthy.module.css';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 550,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: '20px 35px ',
        borderRadius: 15,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    titleCSKH: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    phoneHotline: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'rgb(113, 190, 226)',
        padding: 5,
        borderRadius: 5
    }
}));

const PopupOrderHealthy = (props) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [nameDoctor, setNameDoctor] = useState("");
    console.log(props.doctor, "doctor")

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const dataSend = {
            nameCustomer: data.nameCustomer,
            phone: data.phone,
            information: data.information,
            doctor: props.doctor ? props.doctor : null
        }
        if (window.confirm(`Xác nhận đặt lịch khám tại nhà cùng ${nameDoctor} ?`)) {
            axios.post('http://localhost:4000/message', dataSend)
                .then(res => {
                    if (res.data.code === 200) {
                        alert("Cảm ơn bạn đã để lại thông tin . Chúng tôi sẽ sớm liên hệ lại với bạn !")
                    }
                    else {
                        alert("Có lỗi xảy ra !!!")
                    }
                })
                .catch(err => console.log(err))
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:4000/doctor/${props.doctor}`)
            .then(res => {
                // console.log(res.data.data[0].nameDoctor,'namedoctor')
                setNameDoctor(res.data.data[0].nameDoctor)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        // <div>
        // <div className={classes.container}>
        //     <div >
        //         Đặt lịch khám tại nhà
        //     </div>
        //     <div >
        //         Đội ngũ chăm sóc khách hàng sẽ liên hệ với bạn để xác nhận lịch hẹn thăm khám nhé !
        //     </div>
        // </div>
        // </div>
        <Modal
            open={props.open}
            onClose={props.closeModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"

        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={modalStyle} className={classes.paper}>
                    <div className={classes.title}>
                        <h4 style={{ fontWeight: 'bold', color: 'rgb(0, 89, 131)' }}>Đặt lịch khám tại nhà</h4>
                    </div>
                    <div className={classes.titleCSKH}>
                        <h6 style={{ textAlign: 'center', color: 'rgb(145, 145, 145)' }}>Đội ngũ chăm sóc khách hàng sẽ liên hệ với bạn để xác nhận lịch hẹn thăm khám nhé !</h6>
                    </div>
                    <div className={classes.titleCSKH}>
                        <h6 style={{ textAlign: 'center', color: 'rgb(145, 145, 145)' }}>Liên hệ trực tiếp qua HOTLINE</h6>
                    </div>
                    <div className={classes.phoneHotline}>
                        <i className="fa fa-phone" style={{ marginRight: 10 }}></i>1900 666 888
                    </div>
                    <div className="row pb-2">
                        <div className="col-12 py-2" style={{ color: 'rgb(109, 109, 109)', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                            Họ tên *
                        </div>
                        <div className="col-12">
                            <input
                                defaultValue={localStorage.getItem('name') ? localStorage.getItem('name') : ""}
                                type="text"
                                name="nameCustomer"
                                className="form-control"
                                {...register("nameCustomer", { required: true })}
                            />
                        </div>
                    </div>

                    <div className="row pb-2 ">
                        <div className="col-12 py-2" style={{ color: 'rgb(109, 109, 109)', fontWeight: 'bold' }}>
                            Số điện thoại *
                        </div>
                        <div className="col-12">
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                {...register("phone", { required: true, maxLength: 11 })}
                            />
                        </div>
                    </div>

                    <div className="row pb-2">
                        <div className="col-12 py-2" style={{ color: 'rgb(109, 109, 109)', fontWeight: 'bold' }}>
                            Bệnh lý cần tư vấn *
                        </div>
                        <div className="col-12">
                            <textarea
                                type="text"
                                name="information"
                                style={{ width: '100%' }}
                                rows="5"
                                className="form-control"
                                {...register("information", { required: true })}
                            />
                        </div>
                    </div>

                    <div className="py-3 row" style={{ display: 'flex' }}>
                        <div className="col-6 customBtnBook" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <button className="btn btn-danger" onClick={props.closeModal}>Hủy</button>
                        </div>
                        <div className="col-6 customBtnBook" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <button type="submit" className="btn btn-info">Gửi</button>
                        </div>

                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default PopupOrderHealthy
