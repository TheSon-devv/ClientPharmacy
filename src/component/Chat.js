import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/style.css'
import { changeStateChat, closeChat } from '../store/actions/chat'
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Chat = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const open = useSelector(state => state.chat.open)

    const onSubmit = data => {
        const dataSend = {
            nameCustomer: data.nameCustomer,
            phone: data.phone,
            information: data.information
        }
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
    };

    return (
        <>

            {/* {
                open ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="chatBoxOpen">
                            <div className="boxOpen">
                                <div className="boxTop" onClick={() => dispatch(closeChat())}>
                                    <div style={{ padding: '5px' }}>
                                        <div>Để lại thông tin cho chúng tôi !</div>
                                    </div>
                                </div>

                                <div className="boxBot">

                                    <div className="row pb-2">
                                        <div className="col-2" style={{ color: 'black', justifyContent: 'center', alignItems: 'center' }}>
                                            Tên
                                        </div>
                                        <div className="col-10">
                                            <input
                                                defaultValue={localStorage.getItem('name') ? localStorage.getItem('name') : ""}
                                                type="text"
                                                name="nameCustomer"
                                                className="form-control"
                                                {...register("nameCustomer", { required: true })}
                                            />
                                        </div>
                                    </div>

                                    <div className="row pb-2">
                                        <div className="col-2" style={{ color: 'black' }}>
                                            SĐT
                                        </div>
                                        <div className="col-10">
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                {...register("phone", { required: true, maxLength: 11 })}
                                            />
                                        </div>
                                    </div>

                                    <div className="row pb-2">
                                        <div className="col-12" style={{ color: 'black' }}>
                                            Bệnh lý cần tư vấn
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

                                </div>

                                <div className="customBtnInformation">
                                    <button type="submit">Gửi thông tin</button>
                                </div>
                            </div>
                        </div>
                    </form>
                ) : (
                    <div className="chatBox" onClick={() => dispatch(changeStateChat())}>
                        <div className="box">
                            <i className="fa fa-comments" style={{ fontSize: '40px' }}></i>
                        </div>
                    </div>
                )
            } */}
        </>
    )
}

export default Chat
