import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../store/actions/cart';

const Order = () => {
    const dispatch = useDispatch();
    const listOrder = useSelector(state => state.cart.listOrder)
    const userId = localStorage.getItem('userId')
    useEffect(() => {
        dispatch(getOrder(userId))
    }, [])

    const convertDate = (date) => {
        let todayTime = new Date(date);
        let month = todayTime.getMonth() + 1;
        let day = todayTime.getDate();
        let year = todayTime.getFullYear();
        let hours = todayTime.getHours();
        let minutes = todayTime.getMinutes();
        let seconds = todayTime.getSeconds();
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
    };
    return (
        <div className="container mb-30">
            <div className="py-2">
                <h5>Lịch sử đặt hàng</h5>
            </div>

            {
                listOrder && listOrder.length ? (
                    listOrder.map(item => {
                        return (
                            <div className="row mb-3"
                                style={{ backgroundColor: '#d9d9d9', borderRadius: '5px', boxSizing: 'border-box', marginLeft: '5px', marginRight: '5px' }}
                                key={item._id}
                            >
                                <div className="col-12 mt-3">
                                    <p className="font-weight-bold" style={{ color: 'black' }}>
                                        Ngày mua: <span style={{ color: 'black' }}>{convertDate(item.dateCreate)}</span>
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p className="font-weight-bold" style={{ color: 'black' }}>
                                        Danh sách sản phẩm : <span style={{ color: 'black' }}>
                                            {
                                                item.details.map(i => {
                                                    return (
                                                        <span key={i._id}>
                                                            {i.pharmacyId.map(e => {
                                                                return (
                                                                    <span key={e._id}>
                                                                        {e.namePharmacy}
                                                                        <span style={{ marginRight: 5 }}>,</span>
                                                                    </span>
                                                                )
                                                            })}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </span>
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p className="font-weight-bold" style={{ color: 'black' }}>
                                        Tổng sản phẩm : <span style={{ color: 'black' }}>{item.quantity} sản phẩm</span>
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p className="font-weight-bold" style={{ color: 'black' }}>
                                        Tổng tiền hóa đơn : <span style={{ color: 'black' }}>{Number(item.totalPrice).toFixed(2)} $ </span>
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p className="font-weight-bold" style={{ color: 'black' }}>
                                        Hình thức thanh toán : <span style={{ color: 'black' }}>
                                        {
                                            item.checkoutPaypal ? (
                                                <span>{item.checkoutPaypal}</span>
                                            ) : (
                                                <span>Thanh toán khi nhận hàng</span>
                                            )
                                        }
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>Không có dữ liệu</div>
                )
            }

        </div>
    )
}

export default Order
