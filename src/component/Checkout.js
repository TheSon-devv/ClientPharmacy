import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import '../css/style.css'
import { headerAuthorization } from '../header'
import { reloadCart } from '../store/actions/cart'
import Spinner from '../UI/Spinner/Spinner'
import Paypal from './PayPal';

const Checkout = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const totalCart = useSelector(state => state.cart.totalCart)
    const listCart = useSelector(state => state.cart.listCart)
    const listCheckout = useSelector(state => state.cart.listCheckout)
    const quantityCheckout = useSelector(state => state.cart.quantityCheckout)
    const [check, setCheck] = useState(false)
    const [dataShip, setDataShip] = useState({
        name: "",
        phone: "",
        address: ""
    })

    const shipping = useSelector(state => state.cart.shipping)
    const handling = useSelector(state => state.cart.handling)
    const shipping_discount = useSelector(state => state.cart.shipping_discount)

    let totalCartCheckout = Number(Number(totalCart) + shipping + handling).toFixed(2)
    let totalShip = []
    if (check) {
        totalShip = [
            { id: 1, name: 'Phí vận chuyển', value: shipping },
            { id: 2, name: 'Phí đóng gói', value: handling },
            { id: 3, name: 'Miễn phí vận chuyển', value: -shipping_discount }
        ];
        totalCartCheckout = Number(Number(totalCart) + shipping + handling - shipping_discount).toFixed(2)
    }
    else {
        totalShip = [
            { id: 1, name: 'Phí vận chuyển', value: shipping },
            { id: 2, name: 'Phí đóng gói', value: handling }
        ]
    }
    
    const handlerChangeInput = (e) => {
        setDataShip({
            ...dataShip,
            [e.target.name]: e.target.value
        })
    }

    const checkOutHandler = (e) => {
        e.preventDefault();
        if (dataShip.name !== "" && dataShip.phone !== "" && dataShip.address !== "") {
            const data = {
                userId: localStorage.getItem('userId'),
                quantity: quantityCheckout,
                totalPrice: totalCartCheckout,
                details: listCheckout,
                nameCustomer: localStorage.getItem('name'),
                name: dataShip.name,
                phone: dataShip.phone,
                address: dataShip.address

            }
            axios.post(`http://localhost:4000/checkout`, data, headerAuthorization())
                .then(res => {
                    console.log(res.data.saveCheckout);
                    alert('Thanh toán thành công ! Tiếp tục mua sắm nhé')
                    dispatch(reloadCart())
                    history.push('/')
                    if (res.data.code === 200) {
                        let dataCart = {
                            userId: localStorage.getItem('userId'),
                            listCart: [],
                            listCartPaypal: [],
                            listCheckout: [],
                            numberCart: 0,
                        }
                        axios.put(`http://localhost:4000/cart/${localStorage.getItem('idCart')}`, dataCart)
                            .then(res => {
                                console.log(res.data, 'put')
                            })
                            .catch(err => console.log(err))
                    }
                })
                .catch(err => console.log(err))
        } else {
            alert("Vui lòng thêm địa chỉ giao hàng !")
        }

    }

    function TotalPrice(quantity, price) {
        return Number(quantity * price).toFixed(2)
    }

    console.log(check, 'check')
    return (
        <>
            <main className="ps-main">
                <div className="ps-checkout pt-80 pb-80">
                    <div className="ps-container">
                        <form className="ps-checkout__form">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="ps-checkout__billing">
                                        <h3>Thông tin nhận hàng</h3>
                                        <div className="form-group form-group--inline">
                                            <label>Họ tên<span></span>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                value={dataShip.name}
                                                onChange={handlerChangeInput}
                                            />
                                        </div>

                                        <div className="form-group form-group--inline">
                                            <label>Số điện thoại<span></span>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="phone"
                                                value={dataShip.phone}
                                                onChange={handlerChangeInput}
                                            />
                                        </div>

                                        <div className="form-group form-group--inline">
                                            <label>Địa chỉ<span></span>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="address"
                                                value={dataShip.address}
                                                onChange={handlerChangeInput}
                                            />
                                        </div>


                                    </div>
                                </div>


                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="ps-checkout__order">
                                        <header>
                                            <h3>Đơn hàng của bạn</h3>
                                        </header>
                                        <div className="content">
                                            <table className="table ps-checkout__products">
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase">Sản phẩm</th>
                                                        <th className="text-uppercase">Tổng</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        listCart.map(e => {
                                                            return (
                                                                <tr key={e._id}>
                                                                    <td>{e.namePharmacy}</td>
                                                                    <td>{TotalPrice(e.quantity, e.pricePharmacy)} $</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="content">
                                            <table className="table ps-checkout__products" style={{ borderTop: '1px solid #fff' }}>
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase"></th>
                                                        <th className="text-uppercase"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        totalShip.map(e => {
                                                            return (
                                                                <tr key={e.id}>
                                                                    <td>{e.name}</td>
                                                                    <td>{Number(e.value).toFixed(2)} $</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="content">
                                            <table className="table ps-checkout__products" style={{ borderTop: '1px solid #fff' }}>
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase"></th>
                                                        <th className="text-uppercase"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td>{totalCartCheckout} $</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <footer>
                                            <h3>Phương thức thanh toán</h3>
                                            <div className="form-group cheque">
                                                <div className="ps-radio" >
                                                    <input className="form-control" type="radio" id="rdo01" name="payment"
                                                        onClick={() => setCheck(false)}

                                                    />
                                                    <label htmlFor="rdo01">Thanh toán khi nhận hàng</label>

                                                </div>
                                            </div>
                                            <div className="form-group paypal" >
                                                <div className="ps-radio ps-radio--inline">
                                                    <input className="form-control" type="radio" name="payment" id="rdo02"
                                                        onClick={() => setCheck(true)}
                                                    />
                                                    <label htmlFor="rdo02">Paypal</label>
                                                </div>


                                            </div>
                                            <div className="form-group paypal">
                                                {
                                                    check ? (
                                                        <div className="ps-radio ps-radio--inline" style={{ width: '100%' }}>
                                                            <Paypal />
                                                        </div>
                                                    ) : (
                                                        <button className="ps-btn ps-btn--fullwidth" onClick={checkOutHandler}>Đặt hàng<i className="ps-icon-next"></i></button>
                                                    )
                                                }


                                            </div>

                                        </footer>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Checkout
