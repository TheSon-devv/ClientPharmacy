import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/style.css'
import { changeStateChat, closeChat } from '../store/actions/chat'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import axios from 'axios';

const Chat = (props) => {
    const dispatch = useDispatch()
    const open = useSelector(state => state.chat.open)
    const [messageSend, setMessageSend] = useState({
        nameCustomer: localStorage.getItem('name') ? localStorage.getItem('name') : "",
        phone: "",
        information: ""
    })
    const handlerChange = (e) => {
        setMessageSend({
            ...messageSend,
            [e.target.name]: e.target.value
        })
    }

    const postMessage = () => {
        const data = {
            nameCustomer: messageSend.nameCustomer,
            phone: messageSend.phone,
            information: messageSend.information
        }
        console.log(data)
        axios.post('http://localhost:4000/message', data)
            .then(res => {
                if (res.data.code === 200) {
                    alert("Cảm ơn bạn đã để lại thông tin . Chúng tôi sẽ sớm liên hệ lại với bạn !")
                }
                else {
                    alert("Lỗi")
                }
            })
            .catch(err => console.log(err))
    }
    console.log(props,'props')
    return (
        <>
            {/* <div className="chatBoxOpen">
                <MessengerCustomerChat
                    pageId="100567068919638"
                    appId="969792837168056"
                    htmlRef="<REF_STRING>"
                />
            </div> */}

            {
                open ? (
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
                                            name="nameCustomer"
                                            className="form-control"
                                            value={messageSend.nameCustomer}
                                            onChange={handlerChange} />
                                    </div>
                                </div>

                                <div className="row pb-2">
                                    <div className="col-2" style={{ color: 'black' }}>
                                        SĐT
                                    </div>
                                    <div className="col-10">
                                        <input
                                            name="phone"
                                            className="form-control"
                                            value={messageSend.phone}
                                            onChange={handlerChange} />
                                    </div>
                                </div>

                                <div className="row pb-2">
                                    <div className="col-12" style={{ color: 'black' }}>
                                        Bệnh lý cần tư vấn
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            name="information"
                                            style={{ width: '100%' }}
                                            rows="5"
                                            className="form-control"
                                            value={messageSend.information}
                                            onChange={handlerChange} />
                                    </div>
                                </div>

                            </div>

                            <div className="customBtnInformation">
                                <button onClick={postMessage}>Gửi thông tin</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="chatBox" onClick={() => dispatch(changeStateChat())}>
                        <div className="box">
                            <i className="fa fa-comments" style={{ fontSize: '40px' }}></i>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Chat
