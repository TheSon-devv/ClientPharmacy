import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import '../css/style.css'
import { headerAuthorization } from '../header'
import { reloadCart } from '../store/actions/cart'
import Spinner from '../UI/Spinner/Spinner'
import Paypal from './PayPal'

const Checkout = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const totalCart = useSelector(state => state.cart.totalCart)
    const listCart = useSelector(state => state.cart.listCart)
    const listCheckout = useSelector(state => state.cart.listCheckout)
    const quantityCheckout = useSelector(state => state.cart.quantityCheckout)

    const shipping = useSelector(state => state.cart.shipping)
    const handling = useSelector(state => state.cart.handling)
    const shipping_discount = useSelector(state => state.cart.shipping_discount)

    const [totalShip] = useState([
        { id: 1, name: 'Phí vận chuyển', value: shipping },
        { id: 2, name: 'Phí đóng gói', value: handling },
        { id: 3, name: 'Giảm giá chiết khấu', value: -shipping_discount },
    ])

    let totalCartCheckout = Number(Number(totalCart) + shipping + handling - shipping_discount).toFixed(2)

    const checkOutHandler = (e) => {
        e.preventDefault();
        const data = {
            userId: localStorage.getItem('userId'),
            quantity: quantityCheckout,
            totalPrice: totalCartCheckout,
            details: listCheckout
        }
        axios.post(`http://localhost:4000/checkout`, data, headerAuthorization())
            .then(res => {
                console.log(res.data.saveCheckout);
                alert('Thanh toán thành công ! Tiếp tục mua sắm nhé')
                dispatch(reloadCart())
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    function TotalPrice(quantity, price) {
        return Number(quantity * price).toFixed(2)
    }
    return (
        <>
            <main className="ps-main">
                <div className="ps-checkout pt-80 pb-80">
                    <div className="ps-container">
                        <form className="ps-checkout__form">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                    <div className="ps-checkout__billing">
                                        <h3>Billing Detail</h3>
                                        <div className="form-group form-group--inline">
                                            <label>First Name<span>*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group form-group--inline">
                                            <label>Last Name<span>*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group form-group--inline">
                                            <label>Company Name<span>*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group form-group--inline">
                                            <label>Email Address<span>*</span>
                                            </label>
                                            <input className="form-control" type="email" />
                                        </div>
                                        <div className="form-group form-group--inline">
                                            <label>Company Name<span>*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group form-group--inline">
                                            <label>Phone<span>*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group form-group--inline">
                                            <label>Address<span>*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <div className="ps-checkbox">
                                                <input className="form-control" type="checkbox" id="cb01" />
                                                <label htmlFor="cb01">Create an account?</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                                                <div className="ps-radio">
                                                    <input className="form-control" type="radio" id="rdo01" name="payment" checked readOnly />
                                                    <label htmlFor="rdo01">Thanh toán khi nhận hàng</label>
                                                </div>
                                            </div>
                                            <div className="form-group paypal">
                                                <div className="ps-radio ps-radio--inline">

                                                    <Paypal />

                                                </div>

                                                <button className="ps-btn ps-btn--fullwidth" onClick={checkOutHandler}>Đặt hàng<i className="ps-icon-next"></i></button>
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
