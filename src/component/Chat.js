import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/style.css'
import { changeStateChat, closeChat } from '../store/actions/chat'

const Chat = () => {
    const dispatch = useDispatch()
    const open = useSelector(state => state.chat.open)


    return (
        <>

            {
                open ? (
                    <div className="chatBoxOpen">
                        <div className="boxOpen">
                            <div className="boxTop" onClick={() => dispatch(closeChat())}>
                                <div style={{ padding: '5px' }}>
                                    <div>Hộp thoại liên hệ</div>
                                </div>
                            </div>

                            <div className="boxBot">

                                <div className="row pb-2">
                                    <div className="col-2" style={{ color: 'black', justifyContent: 'center', alignItems: 'center' }}>
                                        Tên
                                    </div>
                                    <div className="col-10">
                                        <input className="form-control" />
                                    </div>
                                </div>

                                <div className="row pb-2">
                                    <div className="col-2" style={{ color: 'black' }}>
                                        SĐT
                                    </div>
                                    <div className="col-10">
                                        <input className="form-control" />
                                    </div>
                                </div>

                                <div className="row pb-2">
                                    <div className="col-12" style={{ color: 'black' }}>
                                        Bệnh lý cần tư vấn
                                    </div>
                                    <div className="col-12">
                                        <textarea style={{ width: '100%' }} rows="5" className="form-control" />
                                    </div>
                                </div>

                            </div>

                            <div className="customBtnInformation">
                                <button>Gửi thông tin</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="chatBox" onClick={() => dispatch(changeStateChat())}>
                        <div className="box">
                            <i className="fa fa-comments" style={{fontSize:'40px'}}></i>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Chat
